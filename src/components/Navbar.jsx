import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="p-4 hidden md:flex items-center gap-16 font-bold text-lg text-mediumGrey">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/portfolio" className="hover:text-veryDarkBlue">
          Portfolio
        </Link>
        <Link to="/about" className="hover:text-veryDarkBlue">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-veryDarkBlue">
          Contact
        </Link>
      </nav>

      <nav className="p-4 flex items-center justify-between md:hidden border-b-2 border-b-gray-500">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div
          className={
            nav
              ? "flex flex-col items-start text-start bg-veryLightGrey font-bold text-3xl w-[300px] p-8 absolute top-[5.5rem] right-0 z-10"
              : "flex flex-col items-start text-start bg-veryLightGrey font-bold text-3xl w-[300px] p-8 absolute top-[-100%] right-0 z-10"
          }
        >
          <Link to="/portfolio" className="hover:text-veryDarkBlue">
            Portfolio
          </Link>
          <Link to="/about" className="hover:text-veryDarkBlue">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-veryDarkBlue">
            Contact
          </Link>
        </div>
        <button onClick={handleClick}>
          {nav ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
        </button>
      </nav>
    </>
  );
}
