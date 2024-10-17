import { FaStar } from "react-icons/fa";
import ReviewCard from "../cards/ReviewCard";
import logoImage from "../assets/logo/quote-left.png";

function Testimonial() {
  return (
    <div className="py-20">
      <div>
        <p className="text-xl text-[#D99904]">---What Our Clients Say---</p>
        <h1 className="text-4xl py-5">TESTIMONIALS</h1>
      </div>
      <div>
        <ReviewCard
          logo={<FaStar />}
          img={logoImage}
          desc={
            'Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          }
          name={'JANE DOE'}
        />
      </div>
    </div>
  );
}

export default Testimonial
