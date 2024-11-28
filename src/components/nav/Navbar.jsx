import React from "react";
import "./Navbar.css";
import logo from "../../img/1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <img src={logo} />
      </Link>

      <nav className="navbar">
        <Link to={"/"} className="button">
          Inicio
        </Link>
        <Link to={"/servicios"} className="button">
          Servicios
        </Link>
        <Link to={"/nosotros"} className="button">
          Nosotr@s
        </Link>
        <Link to={"/acceso"} className="button">
          Acceso
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
