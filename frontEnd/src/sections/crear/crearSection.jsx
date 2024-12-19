import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputCus from "../../components/input/inputCus";
import { fetchFunction } from "../../helpers/api/fetch";
import "./crearSection.css";

const CrearUsuario = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);
  const [idUsuario, setIdUsuario] = useState(null);

  const onSubmit = async (data) => {
    const subirDatos = await fetchFunction("POST", data, "", "crear");

    if (subirDatos.status !== 201) {
      // Errores del backend
      console.log(subirDatos.data.error);
      
      /*
      Object.entries(subirDatos.data.error).forEach(([field, message]) => {
        setError(field, {
          type: "server",
          message: message,
        });
      });
      */
      return;
    }
    setIdUsuario(subirDatos.data.data);
    setModal(true);
  };

  return (
    <>
      <main className="container_all_crear">
        <form onSubmit={handleSubmit(onSubmit)} className="form_container">
          <h3>CREAR USUARIO</h3>
          {/* INFORMACION INICIAL */}
          <InputCus
            name={"cedula"}
            type={"text"}
            placeholder={"Cédula"}
            label={"Cédula *"}
            id={"cedula"}
            register={register("cedula", {
              required: "La cédula es requerida",
            })}
            error={errors.cedula && errors.cedula.message}
          />
          <InputCus
            name={"nombre"}
            type={"text"}
            placeholder={"Nombre completo"}
            label={"Nombre *"}
            id={"nombre"}
            register={register("nombre", {
              required: "El nombre es requerido",
            })}
            error={errors.nombre && errors.nombre.message}
          />
          <InputCus
            name={"email"}
            type={"email"}
            placeholder={"Correo electrónico"}
            label={"Email *"}
            id={"email"}
            register={register("email", { required: "El email es requerido" })}
            error={errors.email && errors.email.message}
          />
          <InputCus
            name={"password"}
            type={"password"}
            placeholder={"Contraseña"}
            label={"Contraseña *"}
            id={"password"}
            register={register("password", {
              required: "La contraseña es requerida",
            })}
            error={errors.password && errors.password.message}
          />
          <InputCus
            name={"telefono"}
            type={"text"}
            placeholder={"Teléfono"}
            label={"Teléfono *"}
            id={"telefono"}
            register={register("telefono", {
              required: "El teléfono es requerido",
            })}
            error={errors.telefono && errors.telefono.message}
          />
          <InputCus
            name={"edad"}
            type={"number"}
            placeholder={"Edad"}
            label={"Edad *"}
            id={"edad"}
            register={register("edad", { required: "La edad es requerida" })}
            error={errors.edad && errors.edad.message}
          />

          <div className="container_btn">
            <button>Crear Usuario</button>
          </div>
        </form>
        {modal && <div>Usuario creado con ID: {idUsuario}</div>}
      </main>
    </>
  );
};

export default CrearUsuario;
