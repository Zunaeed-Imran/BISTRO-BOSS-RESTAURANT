import Favurate from '../button/Favurate';
import BigManuCard from '../cards/BigManuCard';
import ManuCard from '../cards/ManuCard';
import roastDuck from '../assets/SmallMenu/ROAST DUCK BREAST.png';
import tune from '../assets/SmallMenu/TUNA NIÇOISE.png';
import escalape from '../assets/SmallMenu/ESCALOPE DE VEAU .png';
import chicken from '../assets/SmallMenu/CHICKEN AND WALNUT SALAD.png';
import fish from '../assets/SmallMenu/FISH PARMENTIER.png';
import rostPork from '../assets/SmallMenu/ROASTED PORK BELLY.png';

function SaladSection() {
  // Create an array of menu items
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
      <div className="md:px-20">
        <BigManuCard
          name="SALADS"
          desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Pass the menuItems array as a single items prop to ManuCard */}
      <div className="py-5 md:px-20">
        <ManuCard items={menuItems} />
      </div>

      {/* lower button */}
      <div className="py-10">
        <Favurate />
      </div>
    </div>
  );
}

export default SaladSection;
