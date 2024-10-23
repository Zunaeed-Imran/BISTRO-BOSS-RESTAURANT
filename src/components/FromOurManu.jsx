import ManuCard from "../cards/ManuCard";
import ManuLogo from "../assets/logo/textlogo.png";
import ViewFullManu from "../button/ViewFullManu";
import CallUs from "../smallcomponents/CallUs";

function FromOurManu() {
  return (
    <div>
      <div className="pb-10">
        <p className="italic text-[#D99904] text-xl">---Check it out---</p>
        <h1 className="text-4xl py-4">FROM OUR MENU</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
          name={'TUNA NIÇOISE ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ESCALOPE DE VEAU ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'CHICKEN AND WALNUT SALAD ---------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'FISH PARMENTIER ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={ManuLogo}
          name={'ROASTED PORK BELLY ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
      </div>
      <div className="py-7">
        <ViewFullManu />
      </div>
      <div>
        <CallUs />
      </div>
    </div>
  );
}

export default FromOurManu
