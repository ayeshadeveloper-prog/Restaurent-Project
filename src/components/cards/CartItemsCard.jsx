import { Card } from "antd";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const formatPrice = (price) => `Rs. ${price.toLocaleString("en-PK")}`;

const CartItemsCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <Card
      variant="borderless"
      className="cart-product-card w-full rounded-2xl border border-gray-100 bg-white shadow-none"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="cart-product-image shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-[#0a1f3d]">{item.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="remove-item-btn shrink-0"
              aria-label={`Remove ${item.name}`}
              title="Remove item"
            >
              <DeleteOutlined />
            </button>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Unit Price
              </p>
              <p className="text-lg font-bold text-[#16a36a]">
                {formatPrice(item.price)}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Quantity
              </p>
              <div className="flex items-center gap-3 rounded-full bg-[#f8faf9] p-1.5">
                <button
                  type="button"
                  onClick={onDecrease}
                  disabled={item.quantity <= 1}
                  className="quantity-btn"
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  <MinusOutlined />
                </button>
                <span className="min-w-5 text-center font-bold text-[#0a1f3d]">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={onIncrease}
                  className="quantity-btn"
                  aria-label={`Increase ${item.name} quantity`}
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Total Price
              </p>
              <p className="text-xl font-bold text-[#16a36a]">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItemsCard;
