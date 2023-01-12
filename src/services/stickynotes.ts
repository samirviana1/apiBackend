import {Request, Response} from "express";
import {listSn} from "../data";
import {IStickynotes, IResposta} from "../interfaces";
import {v4} from "uuid";

class Stickynotes {
  searchStickynotes(req: Request, res: Response) {
    res.json({
      sucesso: true,
      dados: listSn,
    } as IResposta);
  }
  searchStickynotesForId(req: Request, res: Response) {
    const {id} = req.params;
    const stickynotes = listSn.find((value) => value.uid === id);
    res.status(200).json({
      sucesso: true,
      dados: stickynotes,
    } as IResposta);
  }

  createStickynotes(req: Request, res: Response) {
    const {title, description, uid} = req.body;
    const newStickynotes = {
      id: v4(),
      title,
      description,
      uid,
    } as IStickynotes;

    listSn.push(newStickynotes);

    res.status(201).json({
      sucesso: true,
      dados: newStickynotes,
    } as IResposta);
  }

  ValidarStickynotes(stknotes: IStickynotes): IResposta {
    if (!stknotes.title) {
      return {
        sucesso: false,
        mensagem: "Titulo é obrigatorio!",
        dados: null,
      };
    }
    if (!stknotes.description) {
      return {
        sucesso: false,
        mensagem: "Descrição é obrigatorio!",
        dados: null,
      };
    }

    if (!stknotes.uid) {
      return {
        sucesso: false,
        mensagem: "dado obrigatorio!",
        dados: null,
      };
    }

    return {
      sucesso: true,
      dados: null,
    };
  }

  updateStickynotes(req: Request, res: Response) {
    const {id} = req.params;
    const {title, description} = req.body;
    const stickynotes = listSn.find((value) => value.id === id);
    console.log(stickynotes);

    stickynotes!.title = title;
    stickynotes!.description = description;

    res.status(200).json({
      sucesso: true,
      dados: stickynotes,
    } as IResposta);
  }

  deleteStickynotes(req: Request, res: Response) {
    const {id} = req.params;
    const stickynotesIndex = listSn.findIndex((index) => index.id === id);
    if (stickynotesIndex === -1) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Anotação não encontrada !",
      } as IResposta);
    }
    listSn.splice(stickynotesIndex, 1);
    res.status(200).json({
      sucesso: true,
      mensagem: "Anotação deletada!",
    } as IResposta);
  }
}

const stickynotes = new Stickynotes();
export {stickynotes};
