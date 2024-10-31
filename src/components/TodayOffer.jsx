import ManuCard from "../cards/ManuCard";
import rostDuck from '../assets/SmallMenu/ROAST DUCK BREAST.png';
import tuna from "../assets/SmallMenu/TUNA NIÇOISE.png";
import escalpe from '../assets/SmallMenu/ESCALOPE DE VEAU .png';
import chicken from '../assets/SmallMenu/CHICKEN AND WALNUT SALAD.png';
import Favurate from "../button/Favurate";
import BigManuCard from "../cards/BigManuCard";

function TodayOffer() {
  return (
    <div>
      <div className="py-12">
        <p className="italic font-semibold text-[#D99904]">---Dont miss---</p>
        <h1 className="text-4xl py-3">TODAYS OFFER</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 md:px-20">
        <ManuCard
          img={rostDuck}
          name={'ROAST DUCK BREAST ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={tuna}
          name={'TUNA NIÇOISE ---'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={escalpe}
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
      </div>
      <div className="py-5">
        <Favurate />
      </div>
      <div className="py-8 md:px-20">
        <BigManuCard
          name={'DESSERTS'}
          desc={
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        />
      </div>
    </div>
  );
}

export default TodayOffer
