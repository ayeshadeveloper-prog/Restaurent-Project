import { Card, Tag } from "antd";

const SpecialDealsCards = ({ offer }) => {
  return (
    <Card
      className="special-deal-card h-full"
      cover={
        <div className="special-deal-card__image-wrap">
          <img
            src={offer.image}
            alt={offer.title}
            loading="lazy"
            className="special-deal-card__image"
          />
          <Tag className="special-deal-card__badge">
            {offer.discount}
          </Tag>
        </div>
      }
    >
      <p className="special-deal-card__eyebrow">LIMITED-TIME DEAL</p>
      <h3 className="special-deal-card__title">{offer.title}</h3>
      <p className="special-deal-card__description">{offer.subtitle}</p>
      <div className="special-deal-card__prices">
        <strong>{offer.price}</strong>
        <del>{offer.oldPrice}</del>
      </div>
    </Card>
  );
};

export default SpecialDealsCards;
