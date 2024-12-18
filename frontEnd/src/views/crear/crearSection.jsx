import React, { useEffect, useState } from "react";
import InputCus from "../../components/input/inputCus";
import "./crearSection.css";
import TextAreaCus from "../../components/textArea/textAreaCus";
import SelectCus from "../../components/select/selectCus";
import ButtonCus from "../../components/button/buttonCus";
import { useForm } from "react-hook-form";
import { messagesError } from "../../helpers/objets/msgErrors.js";
import { fetchFunction } from "../../helpers/api/fetch.js";
import ModalCus from "../../components/modal/modalCus.jsx";

const CrearSection = () => {
  //Hook para el formulario
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [modal, setModal] = useState(false);
  const [idTutorial, setIdTutorial] = useState(0);
  const [departamentos, setDepartamentos] = useState(undefined);

  //OBTENER LOS DEPARTAMENTOS DE LA DB
  useEffect(() => {
    const getDepartamentos = async () => {
      const response = await fetchFunction("GET", "", "", "departamentos");

      //DEPARTAMENTOS NO ENCONTRADOS
      if(response.status != 200){
        setError("departamento", {
          type: "server",
          message: response.data.error,
        });
        return
      }
      setDepartamentos(response.data.data);
    };
    getDepartamentos();
  }, []);

  //FUNCION PARA CREAR EL TUTORIAL
  const onSubmit = async (data) => {
    const subirDatos = await fetchFunction("POST", data, "", "crear");

    if (subirDatos.status != 201) {
      //Errores del backend
      Object.entries(subirDatos.data.error).forEach(([field, message]) => {
        setError(field, {
          type: "server",
          message: message,
        });
      });
      return;
    }
    setIdTutorial(subirDatos.data.data);
    setModal(true);
  };

  return (
    <>
      <main className="container_all_crear">
        <form onSubmit={handleSubmit(onSubmit)} className="form_container">
          <h3>CREAR TITULO</h3>
          {/* INFORMACION INICIAL */}
          <InputCus
            name={"titulo"}
            type={"text"}
            placeholder={"¿Que quieres enseñar?"}
            label={"Tema *"}
            id={"titulo"}
            register={register("titulo", { required: messagesError.req })}
            error={errors.titulo && errors.titulo.message}
          />
          <SelectCus
            name={"departamento"}
            placeholder={"¿Que departamento?"}
            label={"Departamento *"}
            id={"departamento"}
            opciones={departamentos && departamentos}
            register={register("departamento", { required: messagesError.req })}
            error={errors.departamento && errors.departamento.message}
          />
          <InputCus
            name={"enlace"}
            type={"url"}
            placeholder={"¿Cual video deseas mostrar?"}
            label={"Enlace del video *"}
            id={"enlace"}
            register={register("enlace", { required: messagesError.req })}
            error={errors.enlace && errors.enlace.message}
            cols={2}
          />
          <TextAreaCus
            name={"descripcion"}
            type={"text"}
            placeholder={"¿Algo más que explicar?"}
            label={"Descripcion"}
            id={"descripcion"}
            register={register("descripcion", { required: messagesError.req })}
            error={errors.descripcion && errors.descripcion.message}
            cols={2}
          />
          {/* SEPARACION */}
          <div className="separador"></div>
          {/* CAMPOS PARA DEFINIR LOS BOTONES */}
          <div className="container_buttons">
            <p>Boton 1</p>
            <InputCus
              name={"textoBtn1"}
              type={"text"}
              placeholder={"¿Qué dirá el botón?"}
              label={"Texto del boton *"}
              id={"textoBtn1"}
              register={register("textoBtn1", { required: messagesError.req })}
              error={errors.textoBtn1 && errors.textoBtn1.message}
            />
            <InputCus
              name={"enlaceBtn1"}
              type={"url"}
              placeholder={"¿Donde quieres dirigir al empleado?"}
              label={"Enlace *"}
              id={"enlaceBtn1"}
              register={register("enlaceBtn1", { required: messagesError.req })}
              error={errors.enlaceBtn1 && errors.enlaceBtn1.message}
            />
          </div>
          <div className="container_buttons">
            <p>Boton 2</p>
            <InputCus
              name={"textoBtn2"}
              type={"text"}
              placeholder={"¿Qué dirá el botón?"}
              label={"Texto del boton"}
              id={"textoBtn2"}
              register={register("textoBtn2")}
              error={errors.textoBtn2 && errors.textoBtn2.message}
            />
            <InputCus
              name={"enlaceBtn2"}
              type={"url"}
              placeholder={"¿Donde quieres dirigir al empleado?"}
              label={"Enlace"}
              id={"enlaceBtn2"}
              register={register("enlaceBtn2")}
              error={errors.enlaceBtn2 && errors.enlaceBtn2.message}
            />
          </div>
          {/* BOTON PARA GUARDAR */}
          <div className="container_btn">
            <ButtonCus texto={"GUARDAR"} />
          </div>
        </form>
      </main>
      {modal && (
        <ModalCus
          titulo={"¡Tutorial creado con exito!"}
          texto={
            "Ahora tus empleados pueden visualizar el tutorial que has creado, presiona el boton para ver el tutorial"
          }
          ruta={`/ver/${idTutorial}`}
          textoBtn={"Ver Tutorial"}
        />
      )}
    </>
  );
};

export default CrearSection;
