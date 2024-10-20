import ourshop from "../assets/pageimage/shop.png";

function HeroOurShop() {
  return (
    <div
      className="bg-cover bg-center relative justify-center top-0 h-[500px]"
      style={{ backgroundImage: `url(${ourshop})` }}>
      <div className="bg-black bg-opacity-50 absolute flex flex-col justify-center items-center m-auto inset-0 w-3/5 h-3/6 text-white">
        <h1 className="text-5xl font-bold font-cinzel pb-3">OUR SHOP</h1>
        <p className="text-xl font-semibold font-cinzel">
          Would you like to try a dish?
        </p>
      </div>
    </div>
  );
}

export default HeroOurShop
