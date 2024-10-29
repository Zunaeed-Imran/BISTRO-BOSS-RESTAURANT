import hero from "../assets/pageimage/hero.png";
import menu from "../assets/pageimage/manu.jpg";
import contact from "../assets/pageimage/contact.png";
import shop from "../assets/pageimage/shop.png";


function Hero() {
  return (
    <div className="w-full">
      <div
        className="relative w-full bg-cover bg-center h-[500px] flex items-start justify-start rounded-md mb-10 top-0"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div>
          <div className="carousel w-full h-[500px]">
            <div id="item1" className="carousel-item w-full">
              <img
                src={hero}
                className="w-full"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src={menu}
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src={contact}
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src={shop}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
