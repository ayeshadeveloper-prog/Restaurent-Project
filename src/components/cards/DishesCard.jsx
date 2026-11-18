
import { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";

const DishCard = ({ dish, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(dish);
    setIsAdded(true);
  };

  return (
    <article className="dish-card">
      <div className="dish-image-wrapper">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="dish-image"
        />

        {dish.badge && (
          <span className="dish-badge">
            {dish.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsFavorite((favorite) => !favorite)}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
          className="dish-wishlist"
        >
          {isFavorite ? (
            <HeartFilled />
          ) : (
            <HeartOutlined />
          )}
        </button>
      </div>

      <div className="dish-content">
        <div className="dish-rating">
          <StarFilled />
          <span>
            {dish.rating}
          </span>
          <span className="dish-reviews">
            ({dish.reviews} Reviews)
          </span>
        </div>

        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-purchase-row">
          <div>
            <span className="dish-price-label">Price</span>
            <span className="dish-price">
              Rs. {dish.price.toLocaleString("en-PK")}
            </span>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className={`dish-cart-button${isAdded ? " is-added" : ""}`}
          >
            <ShoppingCartOutlined />
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default DishCard;


