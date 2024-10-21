import contactus from "../assets/pageimage/contact.png";



function HeroContactUs() {
  return (
    <div
      className="bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${contactus})` }}>
      <div className="bg-black opacity-60 text-white">
        <h1 className="text-5xl font-bold font-cinzel">CONTACT US</h1>
        <p className="text-xl font-semibold font-cinzel">Would you like to try a dish?</p>
      </div>
    </div>
  );
}

export default HeroContactUs
