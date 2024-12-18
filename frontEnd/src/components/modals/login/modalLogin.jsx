import React, { useState } from "react";
import ButtonLogin from "./buttonLogin";
import "./modalLogin.css";
import InputCus from "../../input/inputCus";
import ButtonSolid from "../../buttons/buttonSolid/buttonSolid";
import { useForm } from "react-hook-form"

const ModalLogin = () => {
  //Hook para el formulario
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  
  const [modal, setModal] = useState(false);
  
  //Abrir modal del login
  const clickButton = () => {
    setModal(!modal);
  };

  const onSubmit = (data)=>{
    console.log(data);
    
  }

  return (
    <div className="all_container_modal">
      <ButtonLogin texto={"ACCESO"} click={() => clickButton()} />
      <div className={`container_modal ${modal ? "mostrar" : "ocultar"}`}>
        <p>Iniciar Sesión</p>
        <form className="box_input" onSubmit={handleSubmit(onSubmit)}>
          <InputCus
            label={"Correo o telefono"}
            placeholder={"Ingresa tu correo"}
            id={"cuenta"}
            type={"text"}
            register={register("cuenta")}
          />
          <InputCus
            label={"Contraseña"}
            placeholder={"Ingresa tu contraseña"}
            id={"contrasena"}
            type={"text"}
            register={register("contrasena")}
          />
          <ButtonSolid texto={"Ingresar"} />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
