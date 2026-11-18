import { Space } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import CartItemsCard from "../../../components/cards/CartItemsCard.jsx";
import { useCart } from "../../../context/CartContext.jsx";
import "./CartItems.css";

const CartItems = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="cart-items-section min-w-0 px-0 pt-2 pb-2 md:pt-3">
      <div className="w-full">
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[3px] text-[#16a36a]">
            Your Selection
          </span>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-[#0a1f3d] md:text-4xl">
              Cart Items
            </h2>
            <span className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-500">
              {totalItems} {totalItems === 1 ? "Item" : "Items"} in Cart
            </span>
          </div>
          <p className="mt-3 text-sm text-[#64748b] md:text-base">
            Review your delicious selections before proceeding to checkout.
          </p>
        </div>

        {cartItems.length > 0 ? (
          <Space orientation="vertical" size={16} className="w-full">
            {cartItems.map((item) => (
              <CartItemsCard
                key={item.id}
                item={item}
                onIncrease={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                onDecrease={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                onRemove={() => removeFromCart(item.id)}
              />
            ))}

          </Space>
        ) : (
          <div className="empty-cart rounded-2xl border border-gray-100 bg-white px-5 py-16 text-center">
            <ShoppingOutlined className="text-6xl text-[#16a36a]" />
            <h3 className="mt-5 text-2xl font-bold text-[#0a1f3d]">
              Your Cart is Empty!
            </h3>
            <p className="mt-2 text-[#64748b]">
              Looks like you haven&apos;t added any delicious food yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartItems;
