import manubg from "../assets/pageimage/bgBlurManu.png";
import manucard from "../assets/cardimage/manu.png";
import ReadMore from "../button/ReadMore";

function FromOurMenu2() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${manubg})` }}
    >
      <div className="pt-10">
        <p className="text-xl text-[#D99904] pb-3">---Check it out---</p>
        <h1 className="text-4xl text-white">FROM OUR MENU</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 lg:p-20">
          <img src={manucard} alt="Manu card" />
        </div>
        <div className="text-white text-left px-3 py-5 md:pt-24 md:pr-20">
          <h2 className="text-xl">March 20, 2023</h2>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
}

export default FromOurMenu2
