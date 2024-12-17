import React, { useState } from "react";
import ButtonLogin from "./buttonLogin";
import "./modalLogin.css"

const ModalLogin = () => {
    const [ modal, setModal ] = useState(false);
  const clickButton = () => {
    console.log("CLICK BOTON");
    setModal(!modal)
  };

  return (
    <div className="all_container_modal">
      <ButtonLogin texto={"ACCESO"} click={() => clickButton()} />
        <div className={`container_modal ${modal ? "mostrar" : "ocultar"}`}>
            
        </div>
    </div>
  );
};

export default ModalLogin;
