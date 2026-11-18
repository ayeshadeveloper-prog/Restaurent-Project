
import React from "react";
import { Link } from "react-router-dom";

import {
  InstagramOutlined,
  FacebookFilled,
  WhatsAppOutlined,
  TikTokOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f3d] text-white pt-16 pb-6 px-5 md:px-10 lg:px-16">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand & Newsletter */}
          <div>

            <Link to="/" className="text-white no-underline">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Food<span className="text-[#16a36a]">Villa</span>
              </h2>
            </Link>

            <p className="text-gray-300 text-sm mt-2 tracking-wider">
              GOOD FOOD • HAPPY MOOD
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-5">
              Bringing delicious flavors, fresh ingredients and happiness
              to your table. Enjoy every bite with us!
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>

              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="footer-input w-full min-w-0 px-4 py-3 rounded-xl outline-none"
                />

                <button
                  type="submit"
                  className="footer-subscribe-btn px-5 py-3 rounded-xl font-semibold whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="footer-heading">Our Services</h3>

            <ul className="footer-links">
              <li><Link to="/menu">Online Ordering</Link></li>
              <li><Link to="/menu">Fresh Food</Link></li>
              <li><Link to="/contact">Home Delivery</Link></li>
              <li><Link to="/contact">Dine In</Link></li>
              <li><Link to="/contact">Catering Services</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>

            <div className="flex gap-3 items-start mb-5">
              <EnvironmentOutlined className="footer-contact-icon" />
              <p className="text-gray-300 text-sm leading-6">
                Your Restaurant Address, Faisalabad, Pakistan
              </p>
            </div>

            <div className="flex gap-3 items-center mb-5">
              <PhoneOutlined className="footer-contact-icon" />
              <a href="tel:+923001234567" className="footer-contact-link">
                +92 300 1234567
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <MailOutlined className="footer-contact-icon" />
              <a
                href="mailto:info@foodvilla.com"
                className="footer-contact-link"
              >
                info@foodvilla.com
              </a>
            </div>

            {/* Social Media */}
            <h3 className="text-lg font-semibold mt-9 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <span className="footer-social" role="img" aria-label="Instagram">
                <InstagramOutlined />
              </span>

              <span className="footer-social" role="img" aria-label="Facebook">
                <FacebookFilled />
              </span>

              <span className="footer-social" role="img" aria-label="WhatsApp">
                <WhatsAppOutlined />
              </span>

              <span className="footer-social" role="img" aria-label="TikTok">
                <TikTokOutlined />
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/15 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} FoodVilla. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="footer-bottom-link">
              Privacy Policy
            </Link>

            <Link to="/terms" className="footer-bottom-link">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

