import hero from "../assets/pageimage/hero.png";


function Hero() {
  return (
    <div className="w-full">
      <div
        className="relative w-full bg-cover bg-center h-[500px] flex items-start justify-start rounded-md mb-10 top-0"
        style={{ backgroundImage: `url(${hero})` }}
      >

      </div>
    </div>
  );
}

export default Hero
