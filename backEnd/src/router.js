import { Router } from "express";
import { crearUsuario } from "./controllers/crear.controller.js";

const ruta = Router();

ruta.post("/crear", crearUsuario);


export default ruta;