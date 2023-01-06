import {NextFunction, Request, Response} from "express";
import {list} from "../data";
import {IResposta} from "../interfaces";

export function userExiste(req: Request, res: Response, next: NextFunction) {
  const {id} = req.params;
  const user = list.find((value) => value.id === id);
  if (!user) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Usuario não encontrado!",
      dados: null,
    } as IResposta);
  }
  next();
}
