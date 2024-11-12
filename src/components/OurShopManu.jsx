
import { Outlet } from "react-router-dom";
import NavButton from "../button/NavButton";

function OurShopManu() {
  return (
    <div className="pb-6">
      {/* nav button of this page */}
        <NavButton/>
      {/* start the card section here */}
        <Outlet/>
    </div>
  );
}

export default OurShopManu
