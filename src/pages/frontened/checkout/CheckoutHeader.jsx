
import React from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  LockOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./CheckoutHeader.css";

const CheckoutHeader = () => {
  return (
    <section className="checkout-header relative overflow-hidden">
      <div className="checkout-header__glow checkout-header__glow--one" aria-hidden="true" />
      <div className="checkout-header__glow checkout-header__glow--two" aria-hidden="true" />
      <div className="checkout-header__dots" aria-hidden="true" />

      <div className="checkout-header__container relative z-10 mx-auto max-w-7xl px-5 py-10 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="checkout-header__content">
            <span className="checkout-header__eyebrow mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest">
              <span className="h-2 w-2 rounded-full" />
              ALMOST THERE!
            </span>

            <h1 className="checkout-header__title mb-3 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
              Checkout
              <span>.</span>
            </h1>

            <p className="checkout-header__description mt-4 max-w-xl text-sm sm:text-base">
              Complete your order and get ready for something delicious.
            </p>

            <nav aria-label="Breadcrumb" className="checkout-header__breadcrumb mt-7 inline-flex flex-wrap items-center gap-3 rounded-full border px-4 py-2.5 text-sm">
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <HomeOutlined aria-hidden="true" />
                <span>Home</span>
              </Link>

              <RightOutlined className="checkout-header__breadcrumb-arrow" aria-hidden="true" />

              <Link
                to="/cart"
                className="flex items-center gap-2"
              >
                <ShoppingCartOutlined aria-hidden="true" />
                <span>Cart</span>
              </Link>

              <RightOutlined className="checkout-header__breadcrumb-arrow" aria-hidden="true" />

              <span className="checkout-header__current" aria-current="page">Checkout</span>
            </nav>
          </div>

          <div className="secure-checkout flex items-center gap-4 rounded-2xl border px-5 py-4">
            <div className="secure-checkout__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl">
              <LockOutlined aria-hidden="true" />
            </div>

            <div>
              <h3 className="secure-checkout__title font-bold">Secure Checkout</h3>
              <p className="secure-checkout__subtitle mt-1 text-xs">Your information is protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHeader;




