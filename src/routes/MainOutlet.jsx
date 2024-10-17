import { Outlet } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"


function MainOutlet() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default MainOutlet
