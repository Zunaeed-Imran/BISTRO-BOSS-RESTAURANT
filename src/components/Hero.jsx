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
          <div>
            <img src={menu} alt="menu img" />
          </div>
          <div>
            <img src={shop} alt="shop img" />
          </div>
          <div>
            <img src={contact} alt="contact img" />
          </div>
          <div>
            <img src={hero} alt="hero img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
