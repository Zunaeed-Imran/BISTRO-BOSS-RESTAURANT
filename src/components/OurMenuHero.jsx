import heroImg from "../assets/pageimage/manu.jpg";


function OurMenuHero() {
  return (
    <div
      className="bg-cover bg-center h-[500px] relative justify-center top-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black bg-opacity-65  absolute flex flex-col justify-center items-center w-3/5 h-3/6 m-auto inset-0">
        <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-white">
          OUR <br /> MENU
        </h1>
        <p className="uppercase font-semibold font-cinzel text-white">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
}

export default OurMenuHero
