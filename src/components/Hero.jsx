import hero from "../assets/pageimage/hero.png";
import menu from "../assets/pageimage/manu.jpg";
import contact from "../assets/pageimage/contact.png";
import shop from "../assets/pageimage/shop.png";
import Slider from "react-slick";


function Hero() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


  return (
    <div id="home" className="w-full">
      <div className="mb-9">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={hero} className="w-full" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={menu} className="w-full" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={contact} className="w-full" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={shop} className="w-full" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={menu} className="w-full" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero




// Hero section background image set class.
// className="relative w-full bg-cover bg-center h-[500px] flex items-start justify-start rounded-md mb-10 top-0"
// style={{ backgroundImage: `url(${hero})` }}