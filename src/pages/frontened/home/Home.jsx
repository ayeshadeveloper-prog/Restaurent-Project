import HeroSection from "./HeroSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import Categories from "./Categories.jsx";
import PopularDishes from "./PopularDishes.jsx";
import SpecialOffers from "./SpecialOffers.jsx";
import TestimonialSection from "./TestimonialSection.jsx";
import CTA from "./CTA.jsx";

const Home = () => {
    return (
        <>
         <HeroSection/>
         <FeaturesSection/>
         <Categories columns={4} limit={4}/>
         <PopularDishes limit={3}/>
         <SpecialOffers/>
         <TestimonialSection/>
         <CTA/>
        </>
    )
}

export default Home
