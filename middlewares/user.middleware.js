import { usuarios } from "../index.js";

export const userMiddleware = (req, res, next) => {
  const { usuario } = req.params;
  if (!usuarios.includes(usuario)) {
    return res.status(401).redirect("/assets/img/who.jpeg");
  }
  next();
};
