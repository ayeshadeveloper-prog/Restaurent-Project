
import React from 'react';
import { ArrowRightOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './AboutHero.css';

import aboutImage from '../../../assets/Interior-About.jpg';

const AboutHero = () => {
  return (
    <section className="about-hero">

      <div className="about-hero-container">

        {/* Left Content */}
        <div className="about-hero-content">

          <span className="about-tag">
            OUR STORY, MADE FRESH
          </span>

          <h1>
            Good Food.
            <span> Great Moments.</span>
          </h1>

          <p>
            We bring people together with fresh ingredients, bold flavors,
            and food made with care. Come for a delicious meal, stay for the
            moments worth sharing.
          </p>

          <a href="#our-story" className="about-hero-btn">
            Discover Our Story
            <ArrowRightOutlined />
          </a>

          <div className="about-hero-note">
            <ClockCircleOutlined />
            <span>Freshly made. Happily shared.</span>
          </div>

        </div>

        {/* Right Image */}
        <div className="about-hero-visual">

          <div className="about-image-wrapper">
            <img
              src={aboutImage}
              alt="Warm and welcoming restaurant interior"
            />
          </div>

          <div className="about-experience">
            <h2>10+</h2>
            <span>Years of Passion</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;


