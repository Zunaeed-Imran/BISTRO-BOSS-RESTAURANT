import logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="justify items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-white justify items-center">
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
