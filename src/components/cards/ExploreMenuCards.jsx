
import React from "react";

const MenuExploreCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white border border-[#e5e7eb]">

      {/* Food Image */}
      <div className="relative h-60 overflow-hidden bg-[#f1f5f9]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white text-[#16a36a] text-xs font-bold tracking-wider px-4 py-2 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-[#0a1f3d]">
            {product.name}
          </h3>

          <span className="text-[#16a36a] font-bold whitespace-nowrap">
            Rs. {product.price.toLocaleString("en-PK")}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-7 mt-3">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-5">
          <span className="w-7 h-0.5 bg-[#16a36a]"></span>
          <span className="text-[10px] font-bold tracking-[2px] text-[#16a36a]">
          FRESHLY PREPARED
          </span>
        </div>

      </div>
    </article>
  );
};

export default MenuExploreCard;




