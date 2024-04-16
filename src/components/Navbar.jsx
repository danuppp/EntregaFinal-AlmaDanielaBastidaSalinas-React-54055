import { useContext } from "react";
import { dataContext } from "../components/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "./Cart/TotalItems";
import "../styles/Navbar.css";
import logo from "../assets/uvas.png";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"} style={{ textDecoration: "none", color: "darkred" }}>
          <div className="navbar-logo-container">
            <div className="navbar-logo">
            <img src={logo} alt="Uvas logo" className="w-12 h-12" />
              <span>VINO A VINOS</span>
            </div>
          </div>
        </Link>

        <ul className="navbar-links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/products">Productos</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <div className="navbar-cart">
          <Link
            className="navbar-link"
            to={"/cart"}
            style={{ textDecoration: "none", color: "darkred" }}
          >
            🛒
            {cart.length > 0 ? <TotalItems /> : null}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;