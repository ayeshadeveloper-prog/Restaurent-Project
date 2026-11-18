
import React, { useMemo, useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { exploreMenuData } from "../../../constants/CardsData";
import MenuExploreCard from "../../../components/cards/ExploreMenuCards";

import "./ExploreMenu.css";

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Pasta",
  "Fries",
  "Wings",
  "Healthy Food",
  "Desserts",
];

const ExploreMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Products
  const filteredProducts = useMemo(() => {
    return exploreMenuData.filter((product) => {

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      id="explore-menu"
      className="explore-menu-section py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <span className="text-xs font-bold tracking-[4px] text-[#16a36a]">
            DISCOVER OUR FOOD COLLECTION
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1f3d] mt-4">
            Explore Our{" "}
            <span className="text-[#16a36a] italic font-serif">
              Delicious Menu
            </span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-8 mt-5">
            From delicious burgers to cheesy pizzas and irresistible
            desserts, discover your favorite flavors made with love.
          </p>

        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-9">

          <Input
            size="large"
            prefix={
              <SearchOutlined className="text-[#16a36a] text-lg mr-2" />
            }
            placeholder="Search your favorite food..."
            allowClear
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="explore-search"
          />

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn px-5 py-3 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-[#16a36a] text-white border-[#16a36a]"
                  : "bg-white text-[#334155] border-[#e5e7eb] hover:bg-[#16a36a] hover:text-white hover:border-[#16a36a]"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Category Heading & Count */}
        <div className="flex justify-between items-center border-b border-[#e8e1d6] pb-4 mb-8">

          <h3 className="text-xl md:text-2xl font-bold text-[#0a1f3d]">
            {activeCategory === "All"
              ? "Our Complete Collection"
              : `${activeCategory} Collection`}
          </h3>

          <span className="text-sm text-[#16a36a] font-semibold">
            {filteredProducts.length} Items
          </span>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredProducts.map((product) => (

              <MenuExploreCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <div className="text-5xl mb-5">🍽️</div>

            <h3 className="text-2xl font-bold text-[#0a1f3d]">
              No Dishes Found!
            </h3>

            <p className="text-gray-500 mt-3">
              Try searching for another delicious food item.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 bg-[#16a36a] text-white px-7 py-3 rounded-full font-semibold"
            >
              View All Menu
            </button>

          </div>

        )}

        {/* Result Count */}
        {filteredProducts.length > 0 && (
          <p className="text-center text-sm text-gray-400 mt-12">
            Showing {filteredProducts.length} delicious food items
          </p>
        )}

      </div>
    </section>
  );
};

export default ExploreMenu;






