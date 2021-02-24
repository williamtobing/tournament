import { IoIosMenu } from "react-icons/io";

import logo from "../assets/images/zemestagame-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>

        <a className="mobile-menu" href="/">
          <IoIosMenu />
        </a>

        <nav></nav>
      </div>
    </div>
  );
};

export default Navbar;
