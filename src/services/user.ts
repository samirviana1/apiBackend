import {Request, Response} from "express";
import {list} from "../data";
import {IUser, IResposta} from "../interfaces";
import {v4} from "uuid";

class User {
  getUserList(req: Request, res: Response) {
    res.json({
      sucesso: true,
      dados: list,
    } as IResposta);
  }

  searchUserForId(req: Request, res: Response) {
    const {email} = req.params;
    const user = list.find((value) => value.email === email);
    res.status(200).json({
      sucesso: true,
      dados: user,
    } as IResposta);
  }

  logUser(req: Request, res: Response) {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(418).json({
        sucesso: false,
        mensagem: "Dados em branco! ",
      } as IResposta);
    }

    const userIndex = list.findIndex(
      (index) => index.email === email && index.password === password
    );
    console.log(userIndex);

    if (userIndex < 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Usuario não encontrado!",
      } as IResposta);
    }

    const userLogado = {
      email: list[userIndex].email,
      username: list[userIndex].name,
    };

    console.log(userLogado);

    return res.status(200).json(userLogado);
  }

  createUser(req: Request, res: Response) {
    const {name, email, password} = req.body;

    const newUser = {
      id: v4(),
      name,
      email,
      password,
    } as IUser;

    list.push(newUser);

    res.status(201).json({
      sucesso: true,
      dados: newUser,
    } as IResposta);
  }

  validateUser(user: IUser): IResposta {
    if (!user.name) {
      return {
        sucesso: false,
        mensagem: "Nome do usuario é obrigatorio!",
        dados: null,
      };
    }
    if (!user.email) {
      return {
        sucesso: false,
        mensagem: "E-mail é obrigatorio!",
        dados: null,
      };
    }

    if (!user.password) {
      return {
        sucesso: false,
        mensagem: "Senha é obrigatoria!",
        dados: null,
      };
    }

    return {
      sucesso: true,
      dados: null,
    };
  }
}

const user = new User();
export {user};
