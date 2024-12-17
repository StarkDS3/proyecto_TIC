import React from "react";
import "./buttonLogin.css"

const ButtonLogin = ({ texto,click }) => {
  return <button className="button" onClick={click}>{texto}</button>;
};

export default ButtonLogin;
