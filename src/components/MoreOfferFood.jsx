import roastDuck from '../assets/SmallMenu/ROAST DUCK BREAST.png';
import tune from '../assets/SmallMenu/TUNA NIÇOISE.png';
import escalape from '../assets/SmallMenu/ESCALOPE DE VEAU .png';
import chicken from '../assets/SmallMenu/CHICKEN AND WALNUT SALAD.png';
import fish from '../assets/SmallMenu/FISH PARMENTIER.png';
import rostPork from '../assets/SmallMenu/ROASTED PORK BELLY.png';
import Favurate from '../button/Favurate';
import ManuCardPagination from '../cards/ManuCardPagination';
function MoreOfferFood() {

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
        img: fish,
        name: 'FISH PARMENTIER ---',
        desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
        price: '$14.5',
      },
      {
        img: rostPork,
        name: 'ROASTED PORK BELLY ---',
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
      {
        img: fish,
        name: 'FISH PARMENTIER ---',
        desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
        price: '$14.5',
      },
      {
        img: rostPork,
        name: 'ROASTED PORK BELLY ---',
        desc: 'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce',
        price: '$14.5',
      },
      // Add more items as needed
    ];


  return (
    <div>
      {/* Dessert section small menu items */}
      <div className="md:grid-cols-2 gap-10 pt-5 md:px-20">
        <ManuCardPagination items={menuItems}/>
      </div>
      <div className="py-10">
        <Favurate />
      </div>
    </div>
  );
}

export default MoreOfferFood
