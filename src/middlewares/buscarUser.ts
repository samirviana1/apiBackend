import {NextFunction, Request, Response} from "express";
import {list} from "../data";
import {IResposta} from "../interfaces";

export function buscarUser(req: Request, res: Response, next: NextFunction) {
  const {email} = req.params;
  const user = list.find((value) => value.email === email);
  if (!user) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Usuario não encontrado!",
      dados: null,
    } as IResposta);
  }
  next();
}
