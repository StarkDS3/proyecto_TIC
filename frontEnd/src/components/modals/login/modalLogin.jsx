import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "./buttonLogin";
import "./modalLogin.css";
import InputCus from "../../input/inputCus";
import ButtonSolid from "../../buttons/buttonSolid/buttonSolid";
import { useForm } from "react-hook-form";
import { fetchFunction } from "../../../helpers/api/fetch";

const ModalLogin = () => {
  //Hook para el formulario
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  //Estado para abrir y cerrar el modal
  const [modal, setModal] = useState(false);
  const [errorForm, setErrorForm] = useState(undefined);

  //Abrir modal del login
  const clickButton = () => {
    setModal(!modal);
  };

  //Hook para navegar
  const navegar = useNavigate();

  const onSubmit = async (data) => {
    clearErrors();
    console.log(data);
    const subirDatos = await fetchFunction("POST", data, "", "login");
    console.log(subirDatos);

    if (subirDatos.status != 202) {
      //Errores del backend
      setErrorForm(subirDatos.data.error);
      return;
    }
    localStorage.setItem("user", {
      nombre: subirDatos.data.data.nombre,
      apellido: subirDatos.data.data.apellido,
      rol: subirDatos.data.data.rol,
    });
    navegar("/crear");
  };

  return (
    <div className="all_container_modal">
      <ButtonLogin texto={"ACCESO"} click={() => clickButton()} />
      <div className={`container_modal ${modal ? "mostrar" : "ocultar"}`}>
        <p>Iniciar Sesión</p>
        <p className="error">{errorForm}</p>
        <form className="box_input" onSubmit={handleSubmit(onSubmit)}>
          <InputCus
            label={"Correo o telefono"}
            placeholder={"Ingresa tu correo"}
            id={"cuenta"}
            type={"text"}
            register={register("cuenta", { required: "Campo requerido" })}
            error={errors.cuenta && errors.cuenta.message}
          />
          <InputCus
            label={"Contraseña"}
            placeholder={"Ingresa tu contraseña"}
            id={"contrasena"}
            type={"text"}
            register={register("contrasena", { required: "Campo requerido" })}
            error={errors.contrasena && errors.contrasena.message}
          />
          <ButtonSolid texto={"Ingresar"} />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
