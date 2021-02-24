import { useSelector, useDispatch } from "react-redux";
import { showNav, hideNav } from "../actions";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import logo from "../assets/images/zemestagame-logo.png";

const Navbar = () => {
  const nav = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const showNavbar = (e) => {
    e.preventDefault();

    dispatch(showNav());
  };

  const hideNavbar = (e) => {
    e.preventDefault();

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
              <a href="/" onClick={hideNavbar}>
                HOME
              </a>
            </li>
            <li>
              <a href="/" onClick={hideNavbar}>
                CONTEST
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
