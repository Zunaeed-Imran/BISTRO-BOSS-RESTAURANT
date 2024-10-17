import React from 'react'
import ManuCard from '../cards/ManuCard'
import logoimg from "..//assets/logo/textlogo.png";

function MoreOfferFood() {
  return (
    <div>
      <div>
        <ManuCard
          img={logoimg}
          name={"ROAST DUCK BREAST ------------------"}
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
