import { Outlet } from "react-router-dom"
import OurShop from "../page/OurShop"


function OurShopOutlet() {
  return (
    <div>
      <OurShop/>
      <Outlet/>
    </div>
  )
}

export default OurShopOutlet
