import {NextFunction, Request, Response} from "express";
import {stickynotes} from "../services/stickynotes";

export function validaStickynotes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {id, title, description, uid} = req.body;
  const stickynotesValida = stickynotes.ValidarStickynotes({
    id,
    title,
    description,
    uid,
  });
  if (!stickynotesValida.sucesso) {
    return res.json(stickynotesValida);
  }
  next();
}
