import { useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "../../../context/CartContext.jsx";
import CartHero from "./CartHero.jsx";
import CartItems from "./CartItems.jsx";
import Coupon from "./Coupon.jsx";
import OrderSummary from "./OrderSummary.jsx";
import RecommendedProducts from "./RecomendedProducts.jsx";
import EmptyCart from "./EmptyCart.jsx";

const Cart = () => {
  const { cartItems, addToCart } = useCart();
  const [couponDiscount, setCouponDiscount] = useState(null);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const previousCartItemCount = useRef(cartItems.length);

  useEffect(() => {
    if (cartItems.length === 0) setCouponDiscount(null);
  }, [cartItems.length]);

  useEffect(() => {
    const becameEmpty =
      previousCartItemCount.current > 0 && cartItems.length === 0;
    previousCartItemCount.current = cartItems.length;
    if (!becameEmpty) return;

    const notificationTimeout = setTimeout(() => {
      if (previousCartItemCount.current !== 0) return;

      toast.info(<EmptyCart />, {
        containerId: "empty-cart",
        toastId: "empty-cart",
        autoClose: 5000,
        closeOnClick: false,
        icon: false,
      });
    }, 50);

    return () => clearTimeout(notificationTimeout);
  }, [cartItems.length]);

  return (
    <>
      <ToastContainer
        containerId="empty-cart"
        position="top-right"
        autoClose={5000}
        closeOnClick={false}
        theme="light"
        style={{ width: "min(420px, calc(100vw - 32px))" }}
      />
      <CartHero totalItems={totalItems} />
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {cartItems.length > 0 && (
          <>
            <Row gutter={[24, 24]} align="top">
              <Col xs={24} lg={16}>
                <CartItems />
              </Col>
              <Col xs={24} lg={8}>
                <div className="lg:sticky lg:top-6 lg:mt-56">
                  <OrderSummary couponDiscount={couponDiscount} />
                </div>
              </Col>
            </Row>
            <div className="mt-6">
              <Coupon
                subtotal={subtotal}
                onDiscountChange={setCouponDiscount}
              />
            </div>
          </>
        )}
        <RecommendedProducts onAddToCart={addToCart} />
      </div>
    </>
  );
};

export default Cart;
