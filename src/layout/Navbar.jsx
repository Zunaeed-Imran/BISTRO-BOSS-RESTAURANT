import logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="bg-transparent top-0 fixed w-full z-20">
      <div className="flex justify-between">
        <div className="justify items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-white font-bold justify items-center pr-20">
          <p>HOME</p>
          <p>CONTACT US</p>
          <p>DASHBOARD</p>
          <p>OUR MENU</p>
          <p>OUR SHOP</p>
          <p>SIGN OUT</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
