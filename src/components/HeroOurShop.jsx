import ourshop from "../assets/pageimage/shop.png";

function HeroOurShop() {
  return (
    <div className="" style={{ backgroundImage: `url(${ourshop})` }}>
      <div className="bg-black bg-opacity-50  text-white">
        <h1 className="text-5xl font-semibold font-cinzel pb-3">OUR SHOP</h1>
        <p className="text-xl font-semibold font-cinzel">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
}

export default HeroOurShop
