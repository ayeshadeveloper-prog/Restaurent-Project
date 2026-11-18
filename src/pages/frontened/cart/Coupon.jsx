
import { useState } from "react";
import { Input, Button, Tag } from "antd";
import {
  TagOutlined,
  GiftOutlined,
  CheckCircleFilled,
  DeleteOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { couponOffersData } from "../../../constants/CardsData.jsx";

const Coupon = ({ subtotal = 2500, onDiscountChange }) => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [loading, setLoading] = useState(false);

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      toast.error("Please enter a coupon code!");
      return;
    }

    if (appliedCoupon) {
      toast.info("A coupon is already applied. Remove it first.");
      return;
    }

    setLoading(true);

    const selectedCoupon = couponOffersData.find(
      (coupon) => coupon.code === code,
    );

    if (!selectedCoupon) {
      toast.error("Invalid coupon code! Please try again.");
      setLoading(false);
      return;
    }

    const discount =
      selectedCoupon.type === "percentage"
        ? (subtotal * selectedCoupon.value) / 100
        : selectedCoupon.value;

    const finalDiscount = Math.min(discount, subtotal);

    const couponData = {
      code,
      discount: finalDiscount,
      description: selectedCoupon.description,
    };

    setAppliedCoupon(couponData);
    onDiscountChange?.(finalDiscount);

    toast.success(`${code} applied successfully!`);
    setCouponCode("");
    setLoading(false);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    onDiscountChange?.(null);
    toast.info("Coupon removed successfully.");
  };

  return (
    <section className="relative w-full overflow-visible rounded-3xl border border-[#dcefe4] bg-linear-to-br from-white via-white to-[#f2fbf5] p-6 shadow-[0_16px_45px_rgba(22,163,106,0.10)] sm:p-8">

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
        style={{ position: "absolute", top: "16px", right: "20px" }}
      />

      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#365f52]/10 text-xl text-[#365f52]">
          <GiftOutlined />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Have a Promo Code?
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Apply your coupon and enjoy exclusive savings.
          </p>
        </div>
      </div>

      {/* Coupon Input */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          size="large"
          prefix={<TagOutlined className="text-gray-400" />}
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          onPressEnter={applyCoupon}
          disabled={!!appliedCoupon}
          className="h-12 flex-1 uppercase"
        />

        <Button
          type="primary"
          size="large"
          loading={loading}
          disabled={!!appliedCoupon}
          onClick={applyCoupon}
          className="h-12! border-none! bg-[#365f52]! px-7! font-semibold! hover:bg-[#243c34]!"
        >
          Apply Coupon <ArrowRightOutlined />
        </Button>
      </div>

      {/* Applied Coupon Message */}
      {appliedCoupon && (
        <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-green-200 bg-green-50 p-4 sm:flex-row sm:items-center">

          <div className="flex items-center gap-3">
            <CheckCircleFilled className="text-2xl text-green-600" />

            <div>
              <p className="font-bold text-green-800">
                Coupon Applied Successfully!
              </p>
              <p className="mt-1 text-sm text-green-700">
                {appliedCoupon.code} — You saved Rs.{" "}
                {appliedCoupon.discount.toFixed(0)}
              </p>
            </div>
          </div>

          <Button
            danger
            type="text"
            icon={<DeleteOutlined />}
            onClick={removeCoupon}
          >
            Remove
          </Button>
        </div>
      )}

      {/* Available Coupons */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="mb-3 flex items-center gap-2">
          <GiftOutlined className="text-[#365f52]" />
          <h3 className="font-semibold text-gray-700">
            Available Offers
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {couponOffersData.map((coupon) => (
            <button
              key={coupon.code}
              onClick={() => setCouponCode(coupon.code)}
              disabled={!!appliedCoupon}
              className="rounded-lg border border-dashed border-[#365f52]/50 px-4 py-2 text-sm font-bold text-[#365f52] transition hover:bg-[#365f52]/10 disabled:opacity-50"
            >
              {coupon.code} <Tag color={coupon.color}>{coupon.description}</Tag>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs text-gray-400">
        * Only one coupon can be applied per order.
      </p>
    </section>
  );
};

export default Coupon;


