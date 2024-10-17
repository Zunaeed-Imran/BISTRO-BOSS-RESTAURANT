import ManuCard from "../cards/ManuCard";
import manuImg from "../assets/logo/textlogo.png";

function TodayOffer() {
  return (
    <div>
      <div className="py-12">
        <p className="italic text-[#D99904]">---Dont miss---</p>
        <h1 className="text-4xl">TODAYS OFFER</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 pb-12">
        <ManuCard
          img={manuImg}
          name={'ROAST DUCK BREAST ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={manuImg}
          name={'TUNA NIÇOISE ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={manuImg}
          name={'ESCALOPE DE VEAU ------------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
        <ManuCard
          img={manuImg}
          name={'CHICKEN AND WALNUT SALAD ---------------'}
          desc={
            'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'
          }
          price={'$14.5'}
        />
      </div>
    </div>
  );
}

export default TodayOffer
