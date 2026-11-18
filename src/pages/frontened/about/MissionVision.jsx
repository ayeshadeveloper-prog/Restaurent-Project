
import React from "react";
import "./MissionVission.css";
import journeyImage from "../../../assets/Journey-Image.jpg";

const MissionVision = () => {
  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-[#f7faf8]">
      <div className="mission-vision-container mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8">
        {/* Our Journey - Left Side */}
        <div
          className="journey-card rounded-[25px] overflow-hidden flex items-end p-6 md:p-10"
          style={{ backgroundImage: `url(${journeyImage})` }}
        >

          <div className="journey-content relative z-10 max-w-3xl">
            <span className="text-[#4ade80] uppercase tracking-[3px] text-sm font-bold">
              Our Story
            </span>

            <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 mb-5">
              Our Journey
            </h2>

            <div className="w-20 h-1.5 bg-[#16a36a] mb-6 rounded-full"></div>

            <p className="text-white/85 text-base md:text-lg leading-8">
              Every great meal begins with a passion for food. What started
              as a small dream has grown into a place where fresh ingredients,
              delicious flavors and warm hospitality come together. Our journey
              is built on love for cooking and the happiness of our customers.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-7">

          {/* Our Vision */}
          <div className="vision-card rounded-[25px] p-7 md:p-10 flex-1">
            <span className="text-[#16a36a] uppercase tracking-[3px] text-sm font-bold">
              Our Future
            </span>

            <h2 className="text-[#0a1f3d] text-3xl md:text-4xl font-bold mt-4 mb-5">
              Our Vision
            </h2>

            <p className="text-[#475569] text-base md:text-lg leading-8">
              To become a favorite food destination known for unforgettable
              flavors, fresh ingredients and exceptional hospitality. We aim
              to bring people together through delicious food and memorable
              dining experiences.
            </p>

            <div className="mt-7 w-14 h-1 bg-[#16a36a] rounded-full"></div>
          </div>

          {/* Our Mission */}
          <div className="mission-card rounded-[25px] p-7 md:p-10 flex-1">
            <span className="text-white/75 uppercase tracking-[3px] text-sm font-bold">
              Our Purpose
            </span>

            <h2 className="text-white text-3xl md:text-4xl font-bold mt-4 mb-5">
              Our Mission
            </h2>

            <p className="text-white/90 text-base md:text-lg leading-8">
              To serve fresh, delicious and high-quality food while maintaining
              the highest standards of taste, hygiene and service. Customer
              satisfaction is at the heart of everything we do.
            </p>

            <div className="mt-7 w-14 h-1 bg-white rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;

