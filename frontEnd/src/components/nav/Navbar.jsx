import React from "react";
import "./Navbar.css";
import logo from "../../LOGO.png";
import { Link } from "react-router-dom";
import ModalLogin from "../modals/login/modalLogin";
import ButtonLink from "../buttons/buttonLink/buttonLink";

const Navbar = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <img src={logo} />
      </Link>

      <nav className="navbar">
        <ButtonLink texto={"Inicio"} ruta={"/"} />
        <ButtonLink texto={"Servicios"} ruta={"/servicios"} />
        <ButtonLink texto={"Nosotros"} ruta={"/nosotros"} />

        {/*
        JJC - Implementacion de componentes para estos botones
        <Link to={"/"} className="button">
          Inicio
        </Link>
        <Link to={"/servicios"} className="button">
          Servicios
        </Link>
        <Link to={"/nosotros"} className="button">
          Nosotr@s
        </Link>
        */}
        <ModalLogin />
        {/**
            JJC - Lo borro ya que se suplanta por el modalLogin
            <Link to={"/acceso"} className="button">
              Acceso
            </Link>
           */}
      </nav>
    </header>
  );
};

export default Navbar;
