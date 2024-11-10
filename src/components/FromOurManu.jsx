import ManuCard from "../cards/ManuCard";
import roastDuck from "../assets/SmallMenu/ROAST DUCK BREAST.png";
import tune from "../assets/SmallMenu/TUNA NIÇOISE.png";
import escalape from "../assets/SmallMenu/ESCALOPE DE VEAU .png";
import chicken from "../assets/SmallMenu/CHICKEN AND WALNUT SALAD.png";
import fish from "../assets/SmallMenu/FISH PARMENTIER.png";
import rostPork from "../assets/SmallMenu/ROASTED PORK BELLY.png";
import ViewFullManu from "../button/ViewFullManu";

function FromOurManu() {
  return (
    <div>
      <div className="">
        <p className="italic text-[#D99904] pb-3 pt-10">
          ---Check it out---
        </p>
        <h1 className="text-4xl pb-10">FROM OUR MENU</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:px-20">
        <ManuCard
          img={roastDuck}
          name={'ROAST DUCK BREAST ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={tune}
          name={'TUNA NIÇOISE ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={escalape}
          name={'ESCALOPE DE VEAU ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={chicken}
          name={'CHICKEN AND WALNUT SALAD ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={fish}
          name={'FISH PARMENTIER ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={rostPork}
          name={'ROASTED PORK BELLY ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
      </div>
      <div className="py-10">
        <ViewFullManu />
      </div>
    </div>
  );
}

export default FromOurManu
