
import { Button, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const RecommendedCard = ({ product, onAddToCart }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Tag
          color="green"
          className="absolute left-3 top-3 m-0! rounded-full! border-none! px-3! py-1! font-semibold!"
        >
          {product.badge}
        </Tag>
      </div>

      {/* Product Details */}
      <div className="p-4">

        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#365f52]">
          {product.category}
        </p>

        <h3 className="mb-2 text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        <p className="mb-4 min-h-10 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-400">Price</p>
            <span className="text-xl font-bold text-[#365f52]">
              Rs. {product.price.toLocaleString("en-PK")}
            </span>
          </div>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => onAddToCart(product)}
            className="h-10! rounded-lg! border-none! bg-[#365f52]! font-semibold! hover:bg-[#243c34]!"
          >
            Add to Cart
          </Button>

        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;

