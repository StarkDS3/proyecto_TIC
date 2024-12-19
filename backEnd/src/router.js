import { Router } from "express";
import { crearUsuario } from "./controllers/crear.controller.js";
import { validarCrear } from "./middlewares/crear.middleware.js";
import { login } from "./controllers/login.controller.js";

const ruta = Router();

ruta.post("/crear", validarCrear, crearUsuario);
ruta.post("/login", login)

export default ruta;
