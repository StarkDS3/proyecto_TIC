import React from "react";
import "./inputCus.css";

//La prop cols no ayuda para definir cuantas columnas ocupa el input
const InputCus = ({
  label,
  placeholder,
  type,
  register,
  error,
  id,
  cols = 1,
}) => {
  return (
    <div className="container_input" style={{ gridColumn: `span ${cols}` }}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        {...register}
        className={`input_custom ${error && "error"}`}
      />
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

export default InputCus;
