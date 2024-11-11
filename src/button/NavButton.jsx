import { Link } from "react-router-dom";


function NavButton() {
  return (
    <div>
      <div className="flex gap-4 lg:gap-10 text-xl justify-center items-center pt-10 pb-7">
        <Link
          to={'allsection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          AllMenu
        </Link>
        <Link
          to={'saladsection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          SALAD
        </Link>
        <Link
          to={'pizzasection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          PIZZA
        </Link>
        <Link
          to={'soupsection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          SOUPS
        </Link>
        <Link
          to={'dessertsection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          DESSERT
        </Link>
        <Link
          to={'drinksection'}
          className="hover:text-[#D99904] hover:underline decoration-double btn"
        >
          DRINKS
        </Link>
      </div>
    </div>
  );
}

export default NavButton
