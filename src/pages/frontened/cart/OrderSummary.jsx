
import { Link } from "react-router-dom";

import {
  ShoppingOutlined,
  CarOutlined,
  TagOutlined,
  PercentageOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useCart } from "../../../context/CartContext.jsx";

const OrderSummary = ({ couponDiscount = null }) => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const hasItems = cartItems.length > 0;
  const deliveryCharges = hasItems ? 150 : 0;
  const discount = hasItems ? couponDiscount ?? 200 : 0;
  const tax = hasItems ? 100 : 0;
  const grandTotal =
    subtotal + deliveryCharges - discount + tax;

  const formatPrice = (price) =>
    `Rs. ${price.toLocaleString("en-PK")}`;

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgba(10,31,61,0.06)] sm:p-7 lg:ml-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 pb-6 border-b border-gray-100">

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#e9f8ef] text-[#16a36a] text-xl">
            <ShoppingOutlined />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0a1f3d]">
              Order Summary
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Your payment breakdown
            </p>
          </div>

        </div>

        {/* Financial Details */}
        <div className="py-7 space-y-6">

          {/* Subtotal */}
          <div className="flex justify-between items-center gap-3 text-sm">
            <span className="flex items-center gap-3 text-gray-500">
              <ShoppingOutlined className="text-[#16a36a] text-base" />
              Subtotal
            </span>

            <span className="font-semibold text-[#0a1f3d] whitespace-nowrap">
              {formatPrice(subtotal)}
            </span>
          </div>

          {/* Delivery Charges */}
          <div className="flex justify-between items-center gap-3 text-sm">
            <span className="flex items-center gap-3 text-gray-500">
              <CarOutlined className="text-[#16a36a] text-base" />
              Delivery Charges
            </span>

            <span className="font-semibold text-[#0a1f3d] whitespace-nowrap">
              {formatPrice(deliveryCharges)}
            </span>
          </div>

          {/* Discount */}
          <div className="flex justify-between items-center gap-3 text-sm">
            <span className="flex items-center gap-3 text-gray-500">
              <TagOutlined className="text-[#16a36a] text-base" />
              Discount
            </span>

            <span className="font-semibold text-[#16a36a] whitespace-nowrap">
              - {formatPrice(discount)}
            </span>
          </div>

          {/* Tax */}
          <div className="flex justify-between items-center gap-3 text-sm">
            <span className="flex items-center gap-3 text-gray-500">
              <PercentageOutlined className="text-[#16a36a] text-base" />
              Tax
            </span>

            <span className="font-semibold text-[#0a1f3d] whitespace-nowrap">
              {formatPrice(tax)}
            </span>
          </div>

        </div>

        {/* Grand Total */}
        <div className="bg-[#f8faf9] border border-dashed border-[#c8d9ce] rounded-xl p-5 flex justify-between items-center gap-3">

          <div>
            <h3 className="text-base font-bold text-[#0a1f3d]">
              Grand Total
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              Final amount to pay
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#16a36a] whitespace-nowrap">
            {formatPrice(grandTotal)}
          </h2>

        </div>

        {/* Checkout Button */}
        <Link
          to="/checkout"
          className={`mt-6 w-full flex items-center justify-center gap-3 bg-[#16a36a] hover:bg-[#128252] text-white font-semibold text-sm py-4 px-5 rounded-xl transition-all duration-300 group${hasItems ? "" : " pointer-events-none opacity-50"}`}
          aria-disabled={!hasItems}
          tabIndex={hasItems ? 0 : -1}
          onClick={(event) => {
            if (!hasItems) event.preventDefault();
          }}
        >
          Proceed to Checkout

          <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Secure Checkout */}
        <div className="flex items-center justify-center gap-2 mt-5 text-gray-400 text-xs">
          <SafetyCertificateOutlined className="text-[#16a36a] text-base" />

          <span>Safe & Secure Checkout</span>
        </div>

      </div>

    </section>
  );
};

export default OrderSummary;


