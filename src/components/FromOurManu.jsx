import ManuCard from "../cards/ManuCard";
import ManuLogo from "../assets/logo/textlogo.png";

function FromOurManu() {
  return (
    <div>
      <div className="">
        <p className="italic text-[#D99904] text-xl">---Check it out---</p>
        <h1 className="text-4xl py-4">FROM OUR MENU</h1>
      </div>
      <div className="grid grid-cols-2">
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
      </div>
    </div>
  );
}

export default FromOurManu
