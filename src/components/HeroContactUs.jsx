import contactus from "../assets/pageimage/contact.png";



function HeroContactUs() {
  return (
    <div
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${contactus})` }}>
      <div className="absolute flex flex-col justify-center items-center m-auto inset-0 bg-black opacity-60 w-3/5 h-3/6 text-white">
        <h1 className="text-5xl font-bold font-cinzel">CONTACT US</h1>
        <p className="text-xl font-semibold font-cinzel">Would you like to try a dish?</p>
      </div>
    </div>
  );
}

export default HeroContactUs
