import manubg from "../assets/pageimage/bgBlurManu.png";

function FromOurMenu() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${manubg})` }}
    >
      <div>
        <p className="text-xl text-[#D99904]">---Check it out---</p>
        <h1 className="text-4xl text-white">FROM OUR MENU</h1>
      </div>
    </div>
  );
}

export default FromOurMenu
