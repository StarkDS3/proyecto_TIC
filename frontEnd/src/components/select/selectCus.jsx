import React from "react";
import "./selectCus.css";

const SelectCus = ({
  label,
  name,
  opciones = [],
  register,
  error,
  id,
  placeholder,
}) => {
  return (
    <div className="container_select">
      <label htmlFor={name}>{label}</label>
      <select
        id={id}
        name={name}
        {...register}
        defaultValue={""}
        className={`${error && "error"}`}
      >
        <option value={""} disabled>
          {placeholder}
        </option>
        {/* SE RECORREN TODAS LAS OPCIONES */}
        {opciones.map((value, index) => (
          <option value={value.id} key={index}>
            {value.name}
          </option>
        ))}
      </select>
      {/* MENSAJE POR SI SURGE ALGUN ERROR */}
      {error && (
        <div className="error_input">
          <img src="./public/img/error.png" alt="" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default SelectCus;
