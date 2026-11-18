
import Button from "../../../components/button/Button.jsx";
import pizzaOfferImage from "../../../assets/Food-6.jpg";
import "./SpecialOffer.css";

const SpecialOffers = ({ showViewAllOffers = true }) => {
  return (
    <section id="menu-offers" className="special-offers-section">

      {/* Section Heading */}
      <div className="special-offers-heading">
        <span className="offers-subtitle">
          SPECIAL OFFERS
        </span>

        <h2>Hot Deals & Special Discounts</h2>

        <p>
          Enjoy exclusive deals and delicious meals
          at amazing prices.
        </p>
      </div>

      {/* Main Offer Banner */}
      <div className="main-offer-banner">

        <div className="main-offer-content">
          <span className="main-offer-tag">
            LIMITED TIME OFFER
          </span>

          <h2>
            Buy 1 Get 1 <span>FREE!</span>
          </h2>

          <p>
            Order your favorite pizza and get another
            one absolutely free. Don't miss this amazing deal!
          </p>

          <a href="/menu" className="main-offer-button">
            Order Now
          </a>
        </div>

        <div className="main-offer-image">
          <img src={pizzaOfferImage} alt="Freshly baked pizza" />
        </div>

      </div>

      {showViewAllOffers && (
        <Button to="/menu#menu-offers">
            View All Offers <span aria-hidden="true">→</span>
        </Button>
      )}
    </section>
  );
};

export default SpecialOffers;

