import hero from "../assets/pageimage/hero.png";
import button from "../assets/logo/heroButton.png";

function Hero() {
  return (
    <div>
      <div
        className=" bg-cover bg-center h-[500px] flex items-start justify-start rounded-md mb-28"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="">
          <img src={button} alt="hero button" />
        </div>
      </div>
    </div>
  );
}

export default Hero
