import bcrypt from "bcrypt";
import { db } from "../db.js";

export const login = async (req, res) => {
  try {
    const { contrasena, cuenta } = req.body;

    const [query] = await db.query(
      "SELECT * FROM usuarios WHERE (correo = ? OR telefono = ? )",
      [cuenta, cuenta]
    );

    if (query.length <= 0) {
      return res.status(401).json({
        mensaje: "Acceso denegado",
        error: "Cuenta no registrada",
      });
    }
    //Si el usuario fue encontrado, comparamos la contrasena guardada en la db con la que ingresa
    //Esto se hace con Bcrypt ya qué la contraseña esta en tipo hash
    const contraValid = await bcrypt.compare(contrasena, query[0].contrasena);

    if (!contraValid) {
      return res.status(401).json({
        mensaje: "Acceso denegado",

        error: "Credenciales incorrectas",
      });
    }
    //El acceso es concedido, las credenciales concuerdan
    res.status(202).json({
      mensaje: "Acesso concedido",
      data: {
        nombre: query[0].nombre,
        apellido : query[0].apellido,
        rol: query[0].idRol
      }
    })
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
};
