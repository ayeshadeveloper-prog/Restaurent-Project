import { ConfigProvider, Layout, Typography, Button, Space } from "antd";
import heroImage from "../../../assets/hero.jpg";
import "./HeroSection.css";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#16a34a",
          colorPrimaryHover: "#15803d",
          colorPrimaryActive: "#166534",
          colorTextLightSolid: "#ffffff",
          borderRadius: 999,
        },
      }}
    >
      <Layout
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero__overlay" />
        <Content className="hero__content">
          <Title className="hero__title">
            Fresh food, cooked slowly, served warm.
          </Title>
          <Paragraph className="hero__text">
            Seasonal ingredients, a wood-fired kitchen and a table waiting
            for you tonight.
          </Paragraph>
          <Space size="middle" wrap>
            <Button type="primary" size="large" href="#order">
              Order Now
            </Button>
            <Button className="hero__menu-button" size="large" href="#menu">
              Explore Menu
            </Button>
          </Space>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
