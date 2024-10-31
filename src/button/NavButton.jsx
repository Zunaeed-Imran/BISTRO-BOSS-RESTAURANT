

function NavButton() {
  return (
    <div>
      <div className="flex gap-4 lg:gap-10 text-xl justify-center items-center py-7">
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          SALAD
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          PIZZA
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          SOUPS
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          DESSERT
        </button>
        <button className="hover:text-[#D99904] hover:underline decoration-double btn">
          DRINKS
        </button>
      </div>
    </div>
  );
}

export default NavButton
