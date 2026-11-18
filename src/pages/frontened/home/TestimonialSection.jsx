
import { HeartFilled } from "@ant-design/icons";
import TestimonialCards from "../../../components/cards/TestimonialsCard.jsx";
import "./Testimonials.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section overflow-hidden py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <span className="text-sm font-bold uppercase tracking-[4px] text-[#16a36a]">
            Customer Experiences
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0a1f3d] md:text-5xl">
            What Our Customers <span className="text-[#16a36a]">Say</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#64748b] md:text-base">
            Good food creates beautiful memories. See what our guests say about
            their favorite meals and dining experiences.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#0a1f3d]">
            <HeartFilled className="text-[#16a36a]" aria-hidden="true" />
            Made with love, served with happiness
          </div>
        </div>

        <div className="testimonial-marquee mt-10 md:mt-14">
          <TestimonialCards />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

