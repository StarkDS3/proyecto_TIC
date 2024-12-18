//Validamos que ingresa todos los datos

export const validarCrear = (req, res, next) => {
  const errors = {};
  try {
    if (!req.body.cedula) {
      errors.cedula = "La cedula es obligatoria";
    }

    if (!req.body.apellido) {
      errors.apellido = "El apellido es obligatorio";
    }

    if (!req.body.correo) {
      errors.correo = "El correo es obligatorio";
    }

    if (!req.body.telefono) {
      errors.telefono = "El telefono es obligatorio";
    }

    if (!req.body.direccion) {
      errors.direccion = "La direccion es obligatoria";
    }

    if (!req.body.idRh) {
      errors.idRh = "El tipo de sangre es obligatorio";
    }

    if (!req.body.cedula) {
      errors.cedula = "La cedula es obligatoria";
    }

    //Validamos si existe algun error en el objeto, si existe entonces alguna validacion detectó 
    //que si hay un error, por lo tanto se reccore el objeto y se añade al catch
    if (Object.keys(errors).length > 0) {
      const error = new Error("Error al crear el usuario");
      error.detalles = errors; // Adjunta los detalles al objeto de error
      throw error;
    }

    next();
    
  } catch (error) {
    res.status(400).json({
      mensaje: error.message,
      error: error.detalles,
    });
  }
};
