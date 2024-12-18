import React from "react";
import { Link } from "react-router-dom";
import "./buttonLink.css"

const ButtonLink = ({ruta, texto}) => {
  return (
    <Link to={ruta} className="button_link">
      {texto}
    </Link>
  );
};

export default ButtonLink;
