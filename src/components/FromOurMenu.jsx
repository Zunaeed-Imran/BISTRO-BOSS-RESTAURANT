import manubg from "../assets/pageimage/bgBlurManu.png";
import manucard from "../assets/cardimage/manu.png";
import ReadMore from "../button/ReadMore";

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
      <div>
        <div>
          <img src={manucard} alt="Manu card" />
        </div>
        <div>
          <h2></h2>
          <p></p>
          <ReadMore/>
        </div>
      </div>
    </div>
  );
}

export default FromOurMenu
