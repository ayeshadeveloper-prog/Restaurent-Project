

import { CoffeeOutlined } from "@ant-design/icons";
import contactHeroImage from "../../../assets/Contact-Hero.jpg";
import "./ContactHero.css";

const ContactHero = () => (
  <section className="contact-hero">
    <img
      className="contact-hero__image"
      src={contactHeroImage}
      alt=""
      aria-hidden="true"
    />

    <div className="contact-hero__content">
      <div className="contact-hero__brand" aria-label="Food Villa">
        <CoffeeOutlined aria-hidden="true" />
        <span>Food Villa</span>
      </div>

      <p className="contact-hero__eyebrow">Let&apos;s Connect</p>

      <h1 className="contact-hero__title">
        Contact <span>Us</span>
      </h1>

      <p className="contact-hero__description">
        We&apos;d love to hear from you! Feel free to reach out for reservations,
        feedback, or any inquiries.
      </p>
    </div>
  </section>
);

export default ContactHero;
