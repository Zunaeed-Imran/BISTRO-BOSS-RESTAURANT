import contactus from "../assets/pageimage/contact.png";



function HeroContactUs() {
  return (
    <div
      className="relative w-full bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${contactus})` }}
    >
      <div className="bg-black bg-opacity-60 absolute flex flex-col justify-center items-center m-auto inset-0  w-3/5 h-3/6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold font-cinzel">CONTACT US</h1>
        <p className="text-xl font-semibold font-cinzel px-3">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
}

export default HeroContactUs
