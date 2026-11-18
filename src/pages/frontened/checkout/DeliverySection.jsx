
import React, { useState } from "react";

import { Radio, Tag } from "antd";

import {
  TruckOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const deliveryOptions = [
  {
    value: "standard",
    title: "Standard Delivery",
    description: "Get your order delivered at your doorstep.",
    time: "35–50 Minutes",
    price: 0,
    label: "FREE DELIVERY",
    icon: <TruckOutlined />,
    color: "green",
  },
  {
    value: "express",
    title: "Express Delivery",
    description: "Get your food delivered faster with priority service.",
    time: "20–30 Minutes",
    price: 150,
    label: "FASTEST OPTION",
    icon: <ThunderboltOutlined />,
    color: "orange",
  },
  {
    value: "pickup",
    title: "Pickup From Restaurant",
    description: "Visit our restaurant and collect your fresh order.",
    time: "15–20 Minutes",
    price: 0,
    label: "NO DELIVERY FEE",
    icon: <ShopOutlined />,
    color: "blue",
  },
];

const DeliveryOption = ({ onDeliveryChange }) => {
  const [selectedDelivery, setSelectedDelivery] = useState("standard");

  const handleDeliveryChange = (value) => {
    setSelectedDelivery(value);

    const selectedOption = deliveryOptions.find(
      (option) => option.value === value
    );

    onDeliveryChange?.(selectedOption);
  };

  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">

      {/* Heading */}
      <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl text-[#365f52]">
          <TruckOutlined />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Delivery Options
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Choose how you would like to receive your order.
          </p>
        </div>

      </div>

      {/* Delivery Options */}
      <Radio.Group
        value={selectedDelivery}
        onChange={(e) => handleDeliveryChange(e.target.value)}
        className="flex! w-full! flex-col! gap-3!"
      >

        {deliveryOptions.map((option) => {
          const isSelected = selectedDelivery === option.value;

          return (
            <div
              key={option.value}
              onClick={() => handleDeliveryChange(option.value)}
              className={`relative cursor-pointer rounded-2xl border-2 p-3 transition-all duration-200 sm:p-4 ${
                isSelected
                  ? "border-[#365f52] bg-green-50/60 shadow-sm"
                  : "border-gray-100 bg-white hover:border-green-200 hover:bg-gray-50"
              }`}
            >

              {/* Selected Icon */}
              {isSelected && (
                <CheckCircleFilled className="absolute right-4 top-4 text-xl text-[#365f52]" />
              )}

              <div className="flex items-start gap-3 sm:gap-4">

                {/* Radio */}
                <Radio value={option.value} className="mt-1" />

                {/* Option Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
                    option.color === "green"
                      ? "bg-green-100 text-green-700"
                      : option.color === "orange"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {option.icon}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 pr-5">

                  <div className="mb-2 flex flex-wrap items-center gap-2">

                    <h3 className="font-bold text-gray-800">
                      {option.title}
                    </h3>

                    {option.value === "express" && (
                      <Tag color="orange">Popular</Tag>
                    )}

                  </div>

                  <p className="mb-3 text-xs leading-5 text-gray-500 sm:text-sm">
                    {option.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                    <span className="flex items-center gap-1 text-xs font-medium text-gray-600">
                      <ClockCircleOutlined />
                      {option.time}
                    </span>

                    <span
                      className={`text-sm font-bold ${
                        option.price > 0
                          ? "text-orange-600"
                          : "text-green-700"
                      }`}
                    >
                      {option.price > 0
                        ? `+ Rs. ${option.price}`
                        : "Free"}
                    </span>

                  </div>

                  <div className="mt-3">
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider ${
                        option.color === "green"
                          ? "bg-green-100 text-green-700"
                          : option.color === "orange"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          );
        })}

      </Radio.Group>

      {/* Pickup Information */}
      {selectedDelivery === "pickup" && (
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">

          <div className="flex items-start gap-3">

            <EnvironmentOutlined className="mt-1 text-xl text-blue-600" />

            <div>
              <h4 className="font-bold text-gray-800">
                Restaurant Pickup Location
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Visit our restaurant to collect your order.
                Our restaurant address and contact details will
                be shared with you after order confirmation.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* Delivery Note */}
      {selectedDelivery !== "pickup" && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-gray-50 p-4">

          <ClockCircleOutlined className="mt-1 text-lg text-[#365f52]" />

          <p className="text-xs leading-5 text-gray-600">
            Estimated delivery time may vary depending on
            traffic, restaurant preparation and your location.
          </p>

        </div>
      )}

    </section>
  );
};

export default DeliveryOption;









