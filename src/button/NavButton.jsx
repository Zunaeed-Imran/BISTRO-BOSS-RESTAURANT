import { NavLink } from "react-router-dom";


function NavButton() {
  return (
    <div>
      <div className="flex gap-4 lg:gap-10 text-xl justify-center items-center pt-10 pb-7">
        <NavLink
          to={'allsection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          AllMenu
        </NavLink>
        <NavLink
          to={'saladsection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          SALAD
        </NavLink>
        <NavLink
          to={'pizzasection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          PIZZA
        </NavLink>
        <NavLink
          to={'soupsection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          SOUPS
        </NavLink>
        <NavLink
          to={'dessertsection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          DESSERT
        </NavLink>
        <NavLink
          to={'drinksection'}
          className={({ isActive }) =>
            isActive
              ? 'text-[#D99904] decoration-double btn'
              : 'hover:text-[#D99904] decoration-double btn'
          }
        >
          DRINKS
        </NavLink>
      </div>
    </div>
  );
}

export default NavButton
