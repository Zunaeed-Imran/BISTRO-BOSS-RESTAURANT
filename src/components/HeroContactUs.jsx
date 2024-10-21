import contactus from "../assets/pageimage/contact.png";



function HeroContactUs() {
  return (
    <div
      className="bg-cover bg-center h-[500px]"
      style={{ backgroundImage: `url(${contactus})` }}>
      <div className="bg-black opacity-60 text-white">
        <h1 className="">CONTACT US</h1>
        <p className="">Would you like to try a dish?</p>
      </div>
    </div>
  );
}

export default HeroContactUs
