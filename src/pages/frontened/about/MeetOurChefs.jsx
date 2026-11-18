
import ChefCards from "../../../components/cards/ChefsDataCard.jsx";
import "./MeetOurChefs.css";

const MeetOurChefs = () => {
  return (
    <section className="bg-[#f7faf8] py-12 px-5 md:py-16 md:px-8 lg:py-20 lg:px-16">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10 md:mb-12">
          <div>
            <span className="text-[#16a36a] uppercase tracking-[4px] text-sm font-bold">
              The People Behind The Flavor
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0a1f3d] mt-4">
              Meet Our Chefs
            </h2>

            <p className="text-[#475569] mt-4 max-w-xl leading-7">
              Meet the talented chefs who bring passion, creativity and
              delicious flavors to every meal we serve.
            </p>
          </div>
        </div>

        <ChefCards />

      </div>
    </section>
  );
};

export default MeetOurChefs;


