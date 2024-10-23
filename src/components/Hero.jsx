import hero from "../assets/pageimage/hero.png";
import button from "../assets/logo/heroButton.png";

function Hero() {
  return (
    <div className="w-screen">
      <div
        className="relative w-full bg-cover bg-center h-[500px] flex items-start justify-start rounded-md mb-10 top-0"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute bottom-4 flex left-1/2">
          <img src={button} alt="hero button" />
        </div>
      </div>
    </div>
  );
}

export default Hero
