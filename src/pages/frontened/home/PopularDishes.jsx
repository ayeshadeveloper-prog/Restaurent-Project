
import DishesCard from "../../../components/cards/DishesCard.jsx";
import { popularDishesData } from "../../../constants/CardsData.jsx";
import Button from "../../../components/button/Button.jsx";
import { useCart } from "../../../context/CartContext.jsx";
import "./PopularDishes.css";

const PopularDishes = ({ limit = popularDishesData.length }) => {
  const { cartItems, addToCart } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const visibleDishes = popularDishesData.slice(0, limit);

  return (
    <section id="menu-dishes" className="popular-dishes-section">
      <div className="popular-dishes-container">
        <div className="popular-dishes-header">
          <span className="popular-dishes-subtitle">
            Customer Favorites
          </span>
          <h2 className="popular-dishes-title">
            Our Most Popular Dishes
          </h2>
          <p className="popular-dishes-description">
            Discover the delicious dishes our customers love the most. Fresh
            flavors, quality ingredients and unforgettable taste.
          </p>
        </div>

        {cartCount > 0 && (
          <div className="popular-dishes-cart-count">
            Cart Items Added: {cartCount}
          </div>
        )}

        <div className="popular-dishes-grid">
          {visibleDishes.map((dish) => (
            <DishesCard
              key={dish.id}
              dish={dish}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <Button to="/menu#menu-dishes">
            View All Dishes
            <span aria-hidden="true">→</span>
        </Button>
      </div>
    </section>
  );
};

export default PopularDishes;


