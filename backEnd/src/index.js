import express from "express";
import cors from "cors";
import morgan from "morgan";
import ruta from "./router.js";

const app = express();

app.use(express.json()); //Soportar JSON
app.use(cors()); //Nos permite que el front se pueda comunicar con el backend sin importar la diferencia de dominios
app.use(morgan("dev")); //SOLO DESARROLLO

app.use(ruta);

app.listen(4321, () => {
  console.log(`Servidor corriendo en el puerto 4321`);
});
