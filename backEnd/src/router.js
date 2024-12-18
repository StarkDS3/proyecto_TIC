import { Router } from "express";
import { crearUsuario } from "./controllers/crear.controller.js";
import { validarCrear } from "./middlewares/crear.middleware.js";

const ruta = Router();

ruta.post("/crear", validarCrear, crearUsuario);

export default ruta;
