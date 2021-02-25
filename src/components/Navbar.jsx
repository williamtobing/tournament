import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showNav, hideNav, showScrolled, hideScrolled } from "../actions";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import logo from "../assets/images/zemestagame-logo.png";

const Navbar = () => {
  const nav = useSelector((state) => state.nav);
  const scrolled = useSelector((state) => state.scrolled);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  });

  const handleScrolled = () => {
    if (window.scrollY > 50) {
      dispatch(showScrolled());
    } else {
      dispatch(hideScrolled());
    }
  };

  const showNavbar = (e) => {
    e.preventDefault();

    dispatch(showNav());
  };

  const hideNavbar = () => {
    dispatch(hideNav());
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>

        <IoIosMenu className="mobile-menu" onClick={showNavbar} />

        <nav className={`${nav ? "active" : "menu-btn"} `}>
          <IoIosClose className="mobile-menu-exit" onClick={hideNavbar} />

          <ul>
            <li>
              <Link to="/" onClick={hideNavbar}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/contest" onClick={hideNavbar}>
                CONTEST
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
