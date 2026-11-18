
import { Badge, Button, Card } from "antd";
import {
  ArrowRightOutlined,
  HomeOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import cartHeroBackground from "../../../assets/cart-hero-bg.svg";
import cartTrolley from "../../../assets/Fast Food Trolley Feast.png";
import "./CartHero.css";

const CartHero = ({ totalItems = 0 }) => {
  const navigate = useNavigate();
  const itemCount =
    Number.isFinite(totalItems) && totalItems > 0
      ? Math.floor(totalItems)
      : 0;

  return (
    <section
      className="cart-hero relative overflow-hidden px-5 pt-6 pb-8 sm:px-8 md:pt-8 md:pb-10 lg:px-12 lg:pt-10 lg:pb-12"
      style={{ "--cart-hero-pattern": `url(${cartHeroBackground})` }}
    >
      <div className="cart-hero__layout relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="cart-hero__content">
          <nav
            aria-label="Breadcrumb"
            className="cart-hero__breadcrumb mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-2.5"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              <HomeOutlined aria-hidden="true" />
              <span>Home</span>
            </Link>
            <RightOutlined aria-hidden="true" />
            <span aria-current="page">Cart</span>
          </nav>

          <h1 className="cart-hero__title text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            My Shopping
            <span className="cart-hero__title-highlight mt-1 block">Cart</span>
          </h1>
          <span className="cart-hero__underline mt-3 block" aria-hidden="true" />

          <p className="cart-hero__description mt-6 max-w-xl text-base leading-7 sm:text-lg">
            Your favorite food is just one step away! Review your delicious
            choices and get ready to enjoy every bite.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Card
              variant="borderless"
              className="cart-hero__items-card"
              aria-label={`Total items in cart: ${itemCount}`}
            >
              <Badge
                count={itemCount}
                showZero
                style={{ backgroundColor: "#e5484d" }}
              >
                <span className="cart-hero__cart-icon">
                  <ShoppingCartOutlined aria-hidden="true" />
                </span>
              </Badge>
              <span className="cart-hero__items-divider" aria-hidden="true" />
              <span className="cart-hero__items-copy">
                <span>Total Items:</span>
                <strong>
                  {itemCount} {itemCount === 1 ? "Item" : "Items"}
                </strong>
              </span>
            </Card>

            <Button
              type="primary"
              size="large"
              icon={<ShoppingOutlined aria-hidden="true" />}
              onClick={() => navigate("/menu")}
              className="cart-hero__continue-button"
            >
              <span>Continue Shopping</span>
              <ArrowRightOutlined aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="cart-hero__visual relative mx-auto flex w-full max-w-xl items-center justify-center">
          <div className="cart-hero__visual-circle" aria-hidden="true" />
          <img
            src={cartTrolley}
            alt="A shopping trolley filled with pizza, a burger, fries and a drink"
            className="cart-hero__trolley relative z-10 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CartHero;
