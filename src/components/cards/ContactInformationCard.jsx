import React from "react";

const ContactCard = ({ icon, title, value, description }) => {
  return (
    <div className="contact-card">
      <div className="contact-icon">
        {icon}
      </div>

      <div className="contact-card-content">
        <h3>{title}</h3>
        <h4>{value}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;


