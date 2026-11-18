
import React from 'react';

import {
  FireOutlined,
  HeartOutlined,
  SmileOutlined
} from '@ant-design/icons';

const storyData = [
  {
    icon: <FireOutlined />,
    title: 'Freshly Prepared',
    description:
      'Every dish is prepared fresh to bring out its best flavor, texture, and aroma.'
  },
  {
    icon: <HeartOutlined />,
    title: 'Made with Care',
    description:
      'We pay attention to every detail, from choosing quality ingredients to serving your meal.'
  },
  {
    icon: <SmileOutlined />,
    title: 'Made for Sharing',
    description:
      'A welcoming table and delicious food make it easy to enjoy good moments together.'
  }
];

const OurStoryCards = () => {
  return (
    <div className="story-cards-section" id="story-cards">

      <div className="story-cards-heading">
        <span>THE DETAILS THAT MATTER</span>
        <h3>Good Food, Made <span>Special</span></h3>
      </div>

      <div className="story-cards-grid">

        {storyData.map((item) => (
          <div className="story-card" key={item.title}>

            <div className="story-card-top">
              <div className="story-card-icon">
                {item.icon}
              </div>

            </div>

            <h4>{item.title}</h4>

            <p>{item.description}</p>

            <div className="story-card-line"></div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OurStoryCards;


