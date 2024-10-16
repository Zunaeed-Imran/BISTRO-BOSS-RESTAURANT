import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo/logo.png";
import { RiShoppingCartLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className=" bg-black bg-opacity-50 top-0 fixed w-screen z-20 p-0 m-0">
      <div className="flex justify-between w-full">
        <div className="justify items-center pl-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-white font-bold justify items-center pr-20">
          <p className="hover:text-yellow-400">HOME</p>
          <p className="hover:text-yellow-400">CONTACT US</p>
          <p className="hover:text-yellow-400">DASHBOARD</p>
          <p className="hover:text-yellow-400">OUR MENU</p>
          <p className="hover:text-yellow-400 flex gap-2">
            OUR SHOP <RiShoppingCartLine size={'1.5rem'} />
          </p>
          <p className="hover:text-yellow-400 flex gap-2">
            SIGN OUT <CgProfile size={'1.5rem'} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar


// bg - transparent; it is transparent class to make transparent.