import { Card } from "antd";
import { StarFilled, CommentOutlined, UserOutlined } from "@ant-design/icons";
import { TESTIMONIALS } from "../../constants/CardsData.jsx";

const TestimonialCards = () => {
  const renderCards = (keyPrefix) =>
    TESTIMONIALS.map((item) => (
      <Card
        key={`${keyPrefix}-${item.id}`}
        variant="borderless"
        className="testimonial-card shrink-0 rounded-2xl bg-white"
      >
        <div className="flex items-center justify-between">
          <div
            role="img"
            aria-label={`${item.rating} out of 5 stars`}
            className="flex gap-1 text-sm text-[#f4a623]"
          >
            {Array.from({ length: item.rating }).map((_, index) => (
              <StarFilled key={index} aria-hidden="true" />
            ))}
          </div>
          <CommentOutlined
            aria-hidden="true"
            className="text-3xl text-[#16a36a]/20"
          />
        </div>

        <p className="testimonial-review mt-5 text-sm leading-7 text-[#64748b] md:text-base">
          “{item.review}”
        </p>

        <div className="mt-auto flex items-center gap-3 border-t border-[#e5e7eb] pt-5">
          <div
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16a36a]/10 text-xl text-[#16a36a]"
          >
            <UserOutlined />
          </div>
          <div>
            <h3 className="font-bold text-[#0a1f3d]">{item.name}</h3>
            <p className="mt-1 text-sm text-[#16a36a]">{item.role}</p>
          </div>
        </div>
      </Card>
    ));

  return (
    <div className="testimonial-track">
      <div className="testimonial-group">{renderCards("original")}</div>
      <div className="testimonial-group" aria-hidden="true">
        {renderCards("duplicate")}
      </div>
    </div>
  );
};

export default TestimonialCards;

