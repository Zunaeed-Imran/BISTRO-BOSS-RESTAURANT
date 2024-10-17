import React from 'react'
import ManuCard from '../cards/ManuCard'
import logoimg from "..//assets/logo/textlogo.png";

function MoreOfferFood() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <ManuCard
          img={logoimg}
          name={"ROAST DUCK BREAST ------------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
        <ManuCard
          img={logoimg}
          name={"TUNA NIÇOISE ------------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
        <ManuCard
          img={logoimg}
          name={"ESCALOPE DE VEAU ------------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
        <ManuCard
          img={logoimg}
          name={"CHICKEN AND WALNUT SALAD ---------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
        <ManuCard
          img={logoimg}
          name={"FISH PARMENTIER ------------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
        <ManuCard
          img={logoimg}
          name={"ROASTED PORK BELLY ------------------"}
          desc={
            "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"
          }
          price={"$14.5"}
        />
      </div>
    </div>
  );
}

export default MoreOfferFood
