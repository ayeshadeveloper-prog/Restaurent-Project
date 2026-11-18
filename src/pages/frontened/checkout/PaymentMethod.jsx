
import React, { useState } from "react";

import { Radio, Tag, Input } from "antd";

import {
  WalletOutlined,
  BankOutlined,
  MobileOutlined,
  CheckCircleFilled,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const paymentMethods = [
  {
    value: "cod",
    title: "Cash on Delivery",
    description: "Pay with cash when your food arrives.",
    icon: <WalletOutlined />,
    label: "PAY ON DELIVERY",
    color: "green",
  },
  {
    value: "easypaisa",
    title: "EasyPaisa",
    description: "Pay directly through your EasyPaisa account.",
    icon: <MobileOutlined />,
    label: "DIGITAL PAYMENT",
    color: "green",
  },
  {
    value: "jazzcash",
    title: "JazzCash",
    description: "Make a quick payment using JazzCash.",
    icon: <BankOutlined />,
    label: "DIGITAL PAYMENT",
    color: "red",
  },
];

const PaymentMethod = ({ onPaymentChange }) => {
  const [selectedPayment, setSelectedPayment] = useState("cod");

  const [accountNumber, setAccountNumber] = useState("");

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
    setAccountNumber("");

    onPaymentChange?.({
      method: value,
      accountNumber: "",
    });
  };

  const handleAccountNumber = (value) => {
    setAccountNumber(value);

    onPaymentChange?.({
      method: selectedPayment,
      accountNumber: value,
    });
  };

  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">

      {/* Heading */}
      <div className="mb-7 flex items-center gap-4 border-b border-gray-100 pb-5">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl text-[#365f52]">
          <WalletOutlined />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Payment Method
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Select your preferred payment method.
          </p>
        </div>

      </div>

      {/* Payment Options */}
      <Radio.Group
        value={selectedPayment}
        onChange={(e) => handlePaymentChange(e.target.value)}
        className="flex! w-full! flex-col! gap-4!"
      >

        {paymentMethods.map((method) => {
          const isSelected = selectedPayment === method.value;

          return (
            <div
              key={method.value}
              onClick={() => handlePaymentChange(method.value)}
              className={`relative cursor-pointer rounded-2xl border-2 p-4 transition-all duration-200 sm:p-5 ${
                isSelected
                  ? "border-[#365f52] bg-green-50/60 shadow-sm"
                  : "border-gray-100 bg-white hover:border-green-200 hover:bg-gray-50"
              }`}
            >

              {isSelected && (
                <CheckCircleFilled className="absolute right-4 top-4 text-xl text-[#365f52]" />
              )}

              <div className="flex items-start gap-3 sm:gap-4">

                <Radio value={method.value} className="mt-1" />

                {/* Payment Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                    method.color === "red"
                      ? "bg-rose-50 text-rose-600"
                      : "bg-green-50 text-[#365f52]"
                  }`}
                >
                  {method.icon}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 pr-5">

                  <div className="mb-2 flex flex-wrap items-center gap-2">

                    <h3 className="font-bold text-gray-800">
                      {method.title}
                    </h3>

                    {method.value === "cod" && (
                      <Tag color="success">Popular</Tag>
                    )}

                  </div>

                  <p className="text-xs leading-5 text-gray-500 sm:text-sm">
                    {method.description}
                  </p>

                  <span
                    className={`mt-3 inline-block rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider ${
                      method.color === "red"
                        ? "bg-rose-50 text-rose-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {method.label}
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </Radio.Group>

      {/* Conditional Payment Information */}
      {selectedPayment === "cod" && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-4">

          <WalletOutlined className="mt-1 text-lg text-[#365f52]" />

          <div>
            <h4 className="font-bold text-gray-800">
              Cash Payment
            </h4>

            <p className="mt-1 text-xs leading-5 text-gray-600">
              Please keep the exact amount ready. You can pay
              our delivery rider when your order arrives.
            </p>
          </div>

        </div>
      )}

      {(selectedPayment === "easypaisa" ||
        selectedPayment === "jazzcash") && (
        <div className="mt-5 rounded-xl border border-green-100 bg-green-50/50 p-4">

          <div className="mb-4 flex items-start gap-3">

            <InfoCircleOutlined className="mt-1 text-lg text-[#365f52]" />

            <div>
              <h4 className="font-bold text-gray-800">
                {selectedPayment === "easypaisa"
                  ? "EasyPaisa Payment"
                  : "JazzCash Payment"}
              </h4>

              <p className="mt-1 text-xs leading-5 text-gray-600">
                Enter your registered mobile wallet number.
                Payment instructions will be provided during
                order confirmation.
              </p>
            </div>

          </div>

          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Mobile Wallet Number
          </label>

          <Input
            size="large"
            prefix={<MobileOutlined className="text-gray-400" />}
            placeholder="03XX XXXXXXX"
            value={accountNumber}
            onChange={(e) => handleAccountNumber(e.target.value)}
            className="rounded-xl!"
            maxLength={11}
          />

          <p className="mt-2 text-xs text-gray-500">
            Enter your 11-digit registered mobile number.
          </p>

        </div>
      )}

      {/* Security Note */}
      <div className="mt-5 flex items-start gap-3 rounded-xl bg-gray-50 p-4">

        <SafetyCertificateOutlined className="mt-1 text-lg text-[#365f52]" />

        <p className="text-xs leading-5 text-gray-600">
          Your payment information is handled securely.
          Choose your preferred payment method to continue.
        </p>

      </div>

    </section>
  );
};

export default PaymentMethod;






