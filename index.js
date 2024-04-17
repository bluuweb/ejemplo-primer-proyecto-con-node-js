import express from "express";

const app = express();
const __dirname = import.meta.dirname;

export const usuarios = ["juan"];

// middlwares
app.use(express.static(__dirname + "/public"));

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + "/public/juego.html");
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
