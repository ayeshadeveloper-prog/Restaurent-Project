
import { CHEFS } from "../../constants/CardsData.jsx";

const ChefCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {CHEFS.map((chef) => (
        <div
          key={chef.id}
          className="chef-card relative rounded-2xl overflow-hidden"
        >
          <img
            src={chef.image}
            alt={chef.name}
            className="w-full h-full object-cover"
          />

          <div className="chef-overlay absolute inset-0 flex flex-col justify-end p-6 md:p-8">

            <span className="text-[#4ade80] uppercase text-xs tracking-[3px] font-bold mb-3">
              {chef.role}
            </span>

            <h3 className="text-white text-2xl md:text-3xl font-bold">
              {chef.name}
            </h3>

            <p className="text-white/80 text-sm leading-6 mt-3">
              {chef.description}
            </p>

            <div className="mt-6">
              <span className="text-white/50 text-sm tracking-widest">
                CHEF {chef.number}
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefCards;


