
import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="cta-overlay">

        <div className="cta-content">

          <span className="cta-subtitle">
            GOOD FOOD • HAPPY MOOD
          </span>

          <h2>
            Craving Something
            <span> Delicious?</span>
          </h2>

          <p>
            Fresh ingredients, amazing flavors and
            unforgettable meals are just one click away.
            Order your favorite food today!
          </p>

          <div className="cta-buttons">

            <Link to="/menu" className="cta-primary-btn">
              Order Now
            </Link>

            <Link to="/about" className="cta-secondary-btn">
              Explore More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;


