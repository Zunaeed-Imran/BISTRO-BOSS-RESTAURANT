import { Outlet } from "react-router-dom"
import Navbar from "../layout/Navbar"


function MainOutlet() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainOutlet
