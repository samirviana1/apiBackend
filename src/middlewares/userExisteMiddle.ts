import {NextFunction, Request, Response} from "express";
import {list} from "../data";
import {IResposta} from "../interfaces";

export function userExiste(req: Request, res: Response, next: NextFunction) {
  const {email, name} = req.body;
  const user = list.some(
    (value) => value.email === email || value.name === name
  );
  if (user) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Nome de usuario ou email já existe!",
      dados: null,
    } as IResposta);
  }
  next();
}
