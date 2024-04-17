import express from "express";
import { userMiddleware } from "./middlewares/user.middleware.js";

const app = express();
const __dirname = import.meta.dirname;

export const usuarios = ["juan"];

// middlwares
app.use(express.static(__dirname + "/public"));

app.get("/abracadabra/juego/:usuario", userMiddleware, (req, res) => {
  res.sendFile(__dirname + "/public/juego.html");
});

app.get("/usuarios", (req, res) => {
  res.json({ usuarios });
});

app.get("/abracadabra/conejo/:n", (req, res) => {
  const aleatorio = 1;
  const { n } = req.params;

  if (+n === aleatorio) {
    return res.redirect("/assets/img/conejito.jpg");
  }

  return res.redirect("/assets/img/voldemort.jpg");
});

// middleware
app.use("*", (req, res) => {
  res.status(404).json({ error: 404 });
});

// levantar el servidor
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`);
});
