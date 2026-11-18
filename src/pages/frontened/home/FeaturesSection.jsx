
import { Col, Row } from "antd";
import FeaturesCard from "../../../components/cards/FeaturesCard";
import { featuresData } from "../../../constants/CardsData";
import "./FeatureSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <span className="features-subtitle">WHY CHOOSE US</span>
        <h2>What Makes Us Special?</h2>
        <p>
          We bring you delicious food, fresh ingredients and exceptional
          service every single day.
        </p>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {featuresData.map((feature) => (
          <Col xs={24} sm={12} lg={6} key={feature.id}>
            <FeaturesCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FeaturesSection;



