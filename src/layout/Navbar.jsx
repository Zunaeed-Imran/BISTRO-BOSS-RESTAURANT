import { CgProfile } from 'react-icons/cg';
import logo from '../assets/logo/logo.png';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="bg-black top-0 fixed w-full z-20 p-0 m-0">
      <div className="flex justify-between w-full px-20">
        <button className="justify items-center">
          {location.pathname === '/' ? (
            <ScrollLink to="home" smooth={true} duration={500}>
              <img src={logo} alt="logo" />
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <img src={logo} alt="logo" />
            </RouterLink>
          )}
        </button>
        <div className="flex gap-4 text-white font-bold justify items-center">
          <button className="md:hidden" onClick={toggleMobile}>
            <FaBars />
          </button>
          <div
            className={`${
              mobile ? 'flex' : 'hidden'
            } flex-col gap-4 text-left md:flex md:flex-row`}
          >
            <RouterLink to="/" className="hover:text-yellow-400">
              HOME
            </RouterLink>
            <RouterLink to="/contactuspage" className="hover:text-yellow-400">
              CONTACT US
            </RouterLink>
            <RouterLink to="/error" className="hover:text-yellow-400">
              DASHBOARD
            </RouterLink>
            <RouterLink to="/ourmenu" className="hover:text-yellow-400">
              OUR MENU
            </RouterLink>
            <RouterLink
              to="/ourshop"
              className="hover:text-yellow-400 flex gap-2"
            >
              OUR SHOP <RiShoppingCartLine size="1.5rem" />
            </RouterLink>
            <RouterLink
              to="/login"
              className="hover:text-yellow-400 flex gap-2"
            >
              LOGIN <IoMdLogIn size="1.5rem" />
            </RouterLink>
            <RouterLink
              to="/signup"
              className="hover:text-yellow-400 flex gap-2"
            >
              SIGN UP <CgProfile size="1.5rem" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// bg - transparent; it is transparent class to make transparent.
