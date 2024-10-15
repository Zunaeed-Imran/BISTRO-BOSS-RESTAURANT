import logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="bg-transparent bg-black bg-opacity-20 top-0 fixed w-full z-20">
      <div className="flex justify-between">
        <div className="justify items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-white font-bold justify items-center pr-20">
          <p className="hover:text-yellow-400">HOME</p>
          <p className="hover:text-yellow-400">CONTACT US</p>
          <p className="hover:text-yellow-400">DASHBOARD</p>
          <p className="hover:text-yellow-400">OUR MENU</p>
          <p className="hover:text-yellow-400">OUR SHOP</p>
          <p className="hover:text-yellow-400">SIGN OUT</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
