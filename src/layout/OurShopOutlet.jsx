import { Outlet } from "react-router-dom"
import OurShopManu from "../components/OurShopManu"


function OurShopOutlet() {
  return (
    <div>
      <OurShopManu/>
      <Outlet/>
    </div>
  )
}

export default OurShopOutlet
