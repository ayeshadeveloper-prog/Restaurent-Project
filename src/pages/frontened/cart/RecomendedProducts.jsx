
import { ToastContainer, toast } from "react-toastify";
import { StarOutlined } from "@ant-design/icons";
import RecommendedCard from "../../../components/cards/RecomendedProductsCard.jsx";
import recommendedProducts from "../../../constants/CardsData.jsx";

const RecommendedProducts = ({ onAddToCart }) => {

  const handleAddToCart = (product) => {
    // Parent Cart component ko product bhejein
    onAddToCart?.(product);

    toast.success(`${product.name} added to cart!`, {
      containerId: "recommended-products",
    });
  };

  return (
    <section className="w-full py-10">
      <ToastContainer
        containerId="recommended-products"
        position="top-right"
        autoClose={2500}
        theme="colored"
      />

      {/* Section Heading */}
      <div className="mb-8 text-center">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#365f52]/10 px-4 py-2 text-sm font-semibold text-[#365f52]">
          <StarOutlined />
          YOU MAY ALSO LIKE
        </div>

        <h2 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
          Complete Your Meal
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
          Explore our delicious customer favorites and add something
          special to your order.
        </p>

      </div>

      {/* Recommended Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {recommendedProducts.map((product) => (
          <RecommendedCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}

      </div>

    </section>
  );
};

export default RecommendedProducts;

