
const OfferCard = ({ offer }) => {
  return (
    <div className="offer-card">
      <div className="offer-card-image">
        <img src={offer.image} alt={offer.title} />

        <span className="offer-discount">
          {offer.discount}
        </span>
      </div>

      <div className="offer-card-content">
        <h3>{offer.title}</h3>

        <p>{offer.subtitle}</p>

        <div className="offer-price">
          <span className="new-price">{offer.price}</span>
          <span className="old-price">{offer.oldPrice}</span>
        </div>

        <a href="/menu" className="offer-button">
          {offer.buttonText}
        </a>
      </div>
    </div>
  );
};

export default OfferCard;

