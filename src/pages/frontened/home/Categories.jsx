
import CategoriesCard from "../../../components/cards/CategoriesCard.jsx";
import { categoriesData } from "../../../constants/CardsData.jsx";
import Button from "../../../components/button/Button.jsx";
import "./Categories.css";

const Categories = ({ columns = 3, limit = categoriesData.length }) => {
  const columnClass = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  const visibleCategories = categoriesData.slice(0, limit);

  return (
    <section id="menu-categories" className="py-12 px-5 md:py-16 md:px-8 lg:py-20 lg:px-16 bg-[#f8fbf8]">

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">

        <span className="text-[#16a36a] text-sm font-bold tracking-[3px] uppercase">
          Explore Our Menu
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1f3d] mt-4 mb-4">
          Discover Our Food Categories
        </h2>

        <p className="text-gray-500 text-base leading-7">
          From delicious pizzas to sweet desserts, explore our
          wide variety of freshly prepared food.
        </p>

      </div>

      {/* Category Cards */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columnClass} gap-8 max-w-7xl mx-auto`}>

        {visibleCategories.map((category) => (
          <CategoriesCard
            key={category.id}
            {...category}
          />
        ))}

      </div>

      <Button to="/menu#menu-categories">
          Explore Menu <span aria-hidden="true">→</span>
      </Button>
    </section>
  );
};

export default Categories;



