import { db } from "../db.js";
import bcrypt from "bcrypt"

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
      idRol,
    } = req.body;
    console.log(req.body);

    //ENCRIPTAR LA CONTRASEÑA
    const nuevaContra = await bcrypt.hash(contrasena, 10);
    
    console.log(nuevaContra);
    

    const [insert] = await db.query(
      "INSERT INTO `usuarios`(`cedula`, `nombre`, `apellido`, `correo`, `telefono`, `direccion`, `edad`, `contrasena`, `idGrupo`, `idRh`, `idRol`, `estado`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '1' )",
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
        idRh,
        idRol,
      ]
    );
    console.log(insert);

    res.send('ahhhhhhh');

  } catch (error) {
    res.status(400).json({
        mensaje : "Error al crear el usuario",
        error : error.message
    })
  }
};
