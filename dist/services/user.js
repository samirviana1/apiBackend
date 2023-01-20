"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const data_1 = require("../data");
const uuid_1 = require("uuid");
class User {
    searchUser(req, res) {
        res.json({
            sucesso: true,
            dados: data_1.list,
        });
    }
    searchUserForId(req, res) {
        const { id } = req.params;
        const user = data_1.list.find((value) => value.id === id);
        res.status(200).json({
            sucesso: true,
            dados: user,
        });
    }
    logUser(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(418).json({
                sucesso: false,
                mensagem: "Dados em branco! ",
            });
        }
        const userIndex = data_1.list.findIndex((index) => index.email === email && index.password === password);
        if (userIndex < 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Usuario não encontrado!",
            });
        }
        const userLogon = {
            id: data_1.list[userIndex].id,
            username: data_1.list[userIndex].name,
        };
        return res.status(200).json(userLogon);
    }
    createUser(req, res) {
        const { name, email, password } = req.body;
        const newUser = {
            id: (0, uuid_1.v4)(),
            name,
            email,
            password,
        };
        data_1.list.push(newUser);
        res.status(201).json({
            sucesso: true,
            dados: newUser,
        });
    }
    validateUser(user) {
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
exports.user = user;
