import ManuCard from "../cards/ManuCard";
import ManuLogo from "../assets/logo/textlogo.png";

function FromOurManu() {
  return (
    <div>
      <div className="">
        <p className="italic text-[#D99904] text-xl">---Check it out---</p>
        <h1 className="text-4xl py-4">FROM OUR MENU</h1>
      </div>
      <div>
        <ManuCard
          img={ManuLogo}
          name={''}
          desc={''}
          price={''} />
      </div>
    </div>
  );
}

export default FromOurManu
