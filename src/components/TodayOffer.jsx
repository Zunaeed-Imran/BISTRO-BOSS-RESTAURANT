import roastDuck from '../assets/SmallMenu/ROAST DUCK BREAST.png';
import tune from '../assets/SmallMenu/TUNA NIÇOISE.png';
import escalape from '../assets/SmallMenu/ESCALOPE DE VEAU .png';
import chicken from '../assets/SmallMenu/CHICKEN AND WALNUT SALAD.png';
import Favurate from "../button/Favurate";
import BigManuCard from "../cards/BigManuCard";
import ManuCardPagination from "../cards/ManuCardPagination";

function TodayOffer() {

      const menuItems = [
        {
          img: roastDuck,
          name: 'ROAST DUCK BREAST ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: tune,
          name: 'TUNA NIÇOISE ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: escalape,
          name: 'ESCALOPE DE VEAU ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: chicken,
          name: 'CHICKEN AND WALNUT SALAD ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: roastDuck,
          name: 'ROAST DUCK BREAST ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: tune,
          name: 'TUNA NIÇOISE ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: escalape,
          name: 'ESCALOPE DE VEAU ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        {
          img: chicken,
          name: 'CHICKEN AND WALNUT SALAD ---',
          desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
          price: '$14.5',
        },
        // Add more items as needed
      ];

  return (
    <div>
      <div className="py-10">
        <p className="italic font-semibold text-[#D99904] pb-3">---Dont miss---</p>
        <h1 className="text-4xl">TODAYS OFFER</h1>
      </div>
      <div className="md:grid-cols-2 gap-10 md:px-20">
        <ManuCardPagination items={menuItems}/>
      </div>
      <div className="py-10">
        <Favurate />
      </div>
      <div className=" md:px-20">
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
