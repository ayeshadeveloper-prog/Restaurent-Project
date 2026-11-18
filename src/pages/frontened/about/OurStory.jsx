
import React from 'react';
import {
  ArrowRightOutlined,
  HeartFilled
} from '@ant-design/icons';

import OurStoryCards from '../../../components/cards/OurStoryCards.jsx';
import './OurStory.css';

import mainImage from '../../../assets/Story-image-1.jpg';
import topImage from '../../../assets/Story-image-2.jpg';
import bottomImage from '../../../assets/Story-image-3.jpg';

const OurStory = () => {
  return (
    <section className="our-story" id="our-story">

      <div className="our-story-container">

        {/* Image Collage */}
        <div className="story-images">

          <div className="story-image-back"></div>

          <div className="story-main-image">
            <img src={mainImage} alt="Guests enjoying a meal together" />
          </div>

          <div className="story-top-image">
            <img src={topImage} alt="Chef preparing food in the restaurant kitchen" />
          </div>

          <div className="story-bottom-image">
            <img src={bottomImage} alt="Chef carefully preparing a dish" />
          </div>

          <div className="story-image-badge">
            <HeartFilled />
            <span>Made With Love</span>
          </div>

        </div>

        {/* Story Content */}
        <div className="story-content">

          <span className="story-label">
            <span></span> OUR STORY
          </span>

          <h2>
            A Passion For Food,
            <span> A Love For People.</span>
          </h2>

          <p className="story-description">
            What started as a small dream has become a place
            where delicious food and beautiful memories come
            together. Our love for cooking inspires everything
            we do.
          </p>

          <p className="story-description">
            From selecting fresh ingredients to preparing
            every dish with care, we believe that great food
            should always bring people closer.
          </p>

          <div className="story-highlight">
            <span className="highlight-line"></span>
            <p>
              Our philosophy is simple: serve fresh, cook
              with passion, and make every guest feel special.
            </p>
          </div>

          <a href="#story-cards" className="story-btn">
            Explore Our Story
            <ArrowRightOutlined />
          </a>

        </div>

      </div>

      {/* Story Cards */}
      <OurStoryCards />

    </section>
  );
};

export default OurStory;

