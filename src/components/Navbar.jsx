import { useSelector, useDispatch } from "react-redux";
import { showNav, hideNav } from "../actions";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import logo from "../assets/images/zemestagame-logo.png";

const Navbar = () => {
  const nav = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const showNavbar = () => {
    dispatch(showNav());
  };

  const hideNavbar = () => {
    dispatch(hideNav());
  };

  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>

        <IoIosMenu className="mobile-menu" onClick={showNavbar} />

        <nav className={nav ? "active" : "menu-btn"}>
          <IoIosClose className="mobile-menu-exit" onClick={hideNavbar} />

          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">CONTEST</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
