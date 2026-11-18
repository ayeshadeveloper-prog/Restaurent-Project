
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from "antd";

import {
  CheckCircleFilled,
  ShoppingOutlined,
  GiftOutlined,
  ClockCircleOutlined,
  CheckOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import { toast } from "react-toastify";
import "./OrderConfirmation.css";

const { Title, Text } = Typography;

const OrderConfirmation = ({ orderId, preview = false }) => {
  const toastShown = useRef(false);
  const isPreview = preview || !orderId;

  useEffect(() => {
    if (isPreview || toastShown.current) {
      return;
    }

    toast.success("Your order has been placed successfully!", {
      position: "top-right",
      autoClose: 4000,
      theme: "light",
    });

    toastShown.current = true;
  }, [isPreview]);

  return (
    <section className="min-h-[75vh] bg-[#f7f8f6] px-4 py-12 sm:px-6 lg:py-16">

      <div className="mx-auto max-w-3xl">

        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

          {/* Top Success Area */}
          <div className="order-confirmation__hero relative overflow-hidden px-5 py-12 text-center sm:px-10">

            {/* Decorative Circles */}
            <div className="order-confirmation__circle order-confirmation__circle--one"></div>

            <div className="order-confirmation__circle order-confirmation__circle--two"></div>

            {/* Success Icon */}
            <div className="relative z-10 mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-8 border-white/20 bg-white shadow-lg">

              {isPreview ? (
                <InfoCircleOutlined className="text-6xl text-[#16a36a]" />
              ) : (
                <CheckCircleFilled className="text-7xl text-green-500" />
              )}

            </div>

            <div className="relative z-10">

              <Text className="mb-4 inline-block rounded-full border border-green-300/30 bg-green-400/15 px-4 py-2 text-xs font-bold tracking-widest text-green-200">
                {isPreview ? "ORDER CONFIRMATION PREVIEW" : "ORDER CONFIRMED"}
              </Text>

              <Title level={1} className="m-0 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl" style={{ marginBottom: 16 }}>
                {isPreview ? (
                  "Order Confirmation"
                ) : (
                  <>
                    Order Placed
                    <br />
                    Successfully!
                  </>
                )}
              </Title>

              <Text className="mx-auto block max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                {isPreview
                  ? "This section will confirm your order after the backend successfully receives it."
                  : "Thank you for your order! Your delicious food is being prepared with love. We can't wait for you to enjoy it."}
              </Text>

            </div>

          </div>

          {/* Confirmation Details */}
          <div className="px-5 py-8 sm:px-10 sm:py-10">

            {/* Order ID */}
            <div className="mb-8 rounded-2xl border border-green-100 bg-green-50/70 p-5 text-center">

              <Text className="mb-2 block text-xs font-bold tracking-widest text-gray-500">
                {isPreview ? "ORDER NUMBER" : "YOUR ORDER NUMBER"}
              </Text>

              <Title level={2} className="m-0 text-2xl font-extrabold tracking-wider text-[#365f52]">
                {isPreview ? "Assigned after submission" : `#${orderId}`}
              </Title>

              <Text className="mt-2 block text-xs text-gray-500">
                {isPreview
                  ? "Your order number will appear here after successful submission."
                  : "Please keep this number for your reference."}
              </Text>

            </div>

            {/* Order Progress Message */}
            {isPreview ? (
              <div className="mb-8 rounded-xl bg-[#f8faf9] p-4 text-center">
                <Text className="text-sm text-gray-600">
                  Preview only. No order has been submitted yet.
                </Text>
              </div>
            ) : (
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl text-[#365f52]">
                  <GiftOutlined />
                </div>

                <div>
                  <Title level={5} className="m-0 text-sm font-bold text-gray-800">
                    Order Confirmed
                  </Title>

                  <Text className="mt-1 block text-xs text-gray-500">
                    Your order is received.
                  </Text>
                </div>

                <CheckOutlined className="ml-auto text-green-600" />

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-500">
                  <ClockCircleOutlined />
                </div>

                <div>
                  <Title level={5} className="m-0 text-sm font-bold text-gray-800">
                    Preparing Food
                  </Title>

                  <Text className="mt-1 block text-xs text-gray-500">
                    Freshness is on the way.
                  </Text>
                </div>

              </div>

              </div>
            )}

            {/* Thank You Message */}
            {!isPreview && (
              <div className="mb-8 text-center">

              <Title level={4} className="m-0 text-lg font-bold text-gray-800">
                Thank You for Choosing Us!
              </Title>

              <Text className="mt-2 block text-sm leading-6 text-gray-500">
                We appreciate your trust. Get ready to enjoy
                your favorite food!
              </Text>

              </div>
            )}

            {/* Continue Shopping Button */}
            {!isPreview && (
              <div className="flex justify-center">

              <Link to="/menu" className="w-full sm:w-auto">

                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingOutlined />}
                  className="h-12! w-full! rounded-xl! border-none! bg-[#365f52]! px-8! font-semibold! shadow-md! hover:bg-[#254b3c]! sm:w-auto!"
                >
                  Continue Shopping
                </Button>

              </Link>

              </div>
            )}

          </div>

        </div>

        {/* Bottom Note */}
        <Text className="mt-6 block text-center text-xs text-gray-400">
          {isPreview
            ? "This is a preview of the order confirmation."
            : "Made with love. Fresh food, happy moments!"}
        </Text>

      </div>

    </section>
  );
};

export default OrderConfirmation;










