import { db } from "../db.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const {
      cedula,
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
      edad,
      contrasena,
      idGrupo,
      idRh,
    } = req.body;
    //ENCRIPTAR LA CONTRASEÑA
    const nuevaContra = await bcrypt.hash(contrasena, 10);
    const [insert] = await db.query(
      "INSERT INTO `usuarios`(`cedula`, `nombre`, `apellido`, `correo`, `telefono`, `direccion`, `edad`, `contrasena`, `idGrupo`, `idRh`, `idRol`, `estado`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, '1' )",
      [
        cedula,
        nombre,
        apellido,
        correo,
        telefono,
        direccion,
        edad,
        nuevaContra,
        idGrupo,
        idRh
      ]
    );

    if (insert.affectedRows <= 0) {
      throw new Error("No se insertó el usuario");
    }

    res.status(201).json({
      mensaje: "Usuario creado con exito",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
};
