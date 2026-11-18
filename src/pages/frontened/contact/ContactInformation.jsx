import React from "react";
import ContactCard from "../../../components/cards/ContactInformationCard.jsx";
import { contactData } from "../../../constants/CardsData.jsx";

import "./ContactInformation.css";

const ContactInformation = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-heading__eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Connect <span>With Us</span>
          </h2>

          <p>
            Have a question or planning a visit? We&apos;d love to hear from
            you. Reach out anytime!
          </p>
        </div>

        <div className="contact-grid">
          {contactData.map(({ id, icon: Icon, title, value, description }) => (
            <ContactCard
              key={id}
              icon={<Icon />}
              title={title}
              value={value}
              description={description}
            />
          ))}
        </div>

        <div className="contact-map">
          <iframe
            title="Map showing Food Villa on Main Boulevard, Faisalabad"
            src="https://maps.google.com/maps?q=Main%20Boulevard%2C%20Faisalabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;






