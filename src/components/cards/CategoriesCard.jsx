
const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="category-card group">

      {/* Category Image */}
      <div className="category-image-wrapper">
        <img
          src={image}
          alt={title}
          className="category-image"
          loading="lazy"
        />
      </div>

      {/* Category Content */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-[#0a1f3d] mb-3 group-hover:text-[#16a36a] transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-7 mb-5">
          {description}
        </p>

      </div>
    </div>
  );
};

export default CategoryCard;










