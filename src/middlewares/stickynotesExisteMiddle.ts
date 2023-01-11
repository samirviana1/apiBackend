import {NextFunction, Request, Response} from "express";
import {listSn} from "../data";
import {IResposta} from "../interfaces";

export function stickynotesExiste(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {id} = req.params;
  const filterStickynotes = listSn.find((stknotes) => stknotes.uid === id);
  console.log(filterStickynotes);

  if (!filterStickynotes) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Anotações não encontradas!",
      dados: null,
    } as IResposta);
  }
  next();
}
