import {NextFunction, Request, Response} from "express";
import {user} from "../services/user";

export function validaUser(req: Request, res: Response, next: NextFunction) {
  const {id, name, email, password} = req.body;
  const userValido = user.validateUser({
    id,
    name,
    email,
    password,
  });
  if (!userValido.sucesso) {
    return res.json(userValido);
  }
  next();
}
