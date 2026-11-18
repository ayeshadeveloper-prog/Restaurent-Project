
import { Card } from "antd";

const FeaturesCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="feature-card" bordered>
      <div className="feature-icon">
        <Icon />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </Card>
  );
};

export default FeaturesCard;

