import { FaStar } from "react-icons/fa";
import ReviewCard from "../cards/ReviewCard";

// REACT SLIDER PACKAGE
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// image content importing.
import man1 from "../assets/people/1.png";
import man2 from "../assets/people/2.png";
import man3 from "../assets/people/3.png";
import man4 from "../assets/people/4.png";
import man5 from "../assets/people/5.png";
import man6 from "../assets/people/6.png";
import man7 from "../assets/people/7.png";
import man8 from "../assets/people/8.png";
import man9 from "../assets/people/9.png";
import man10 from "../assets/people/10.png";
import man11 from "../assets/people/11.png";
import man12 from "../assets/people/12.png";
import man13 from "../assets/people/13.png";



function Testimonial() {


   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     speed: 5000,
     autoplaySpeed: 5000,
     cssEase: 'linear',
   };

  return (
    <div className="py-10">
      <div>
        <p className="text-xl text-[#D99904]">---What Our Clients Say---</p>
        <h1 className="text-4xl py-3">TESTIMONIALS</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <ReviewCard
              img={man1}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man2}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man3}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man4}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man5}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man6}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man7}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man8}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man9}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man10}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man11}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man12}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
          <div>
            <ReviewCard
              img={man13}
              logo={<FaStar />}
              desc={
                'Various version have evolved over the years, sometimes by accident, sometimes on purpose'
              }
              name={'JANE DOE'}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial
