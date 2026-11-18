import { Col, Row } from "antd";
import { FireOutlined } from "@ant-design/icons";
import { specialOffersData } from "../../../constants/CardsData.jsx";
import SpecialDealsCards from "../../../components/cards/SpecialDealsCards.jsx";
import "./SpecialDeals.css";

const SpecialDeals = () => {
  return (
    <section
      id="special-deals"
      className="special-deals-section px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="special-deals-heading mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="special-deals-eyebrow inline-flex items-center gap-2">
            <FireOutlined aria-hidden="true" />
            TODAY&apos;S SPECIAL OFFERS
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Special Deals –{" "}
            <span>Big Taste, Better Prices</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base">
            Exclusive food deals, unbeatable meal combos, and hot offers made
            for happy meals. Pick your favorite and enjoy more for less.
          </p>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {specialOffersData.map((offer) => (
            <Col key={offer.id} xs={24} md={12} lg={8}>
              <SpecialDealsCards offer={offer} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SpecialDeals;
