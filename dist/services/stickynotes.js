"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stickynotes = void 0;
const data_1 = require("../data");
const uuid_1 = require("uuid");
class Stickynotes {
    searchStickynotes(req, res) {
        res.json({
            sucesso: true,
            dados: data_1.listSn,
        });
    }
    searchStickynotesForId(req, res) {
        const { id } = req.params;
        const stickynotes = data_1.listSn.find((value) => value.uid === id);
        res.status(200).json({
            sucesso: true,
            dados: stickynotes,
        });
    }
    createStickynotes(req, res) {
        const { title, description, uid } = req.body;
        const newStickynotes = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            uid,
        };
        data_1.listSn.push(newStickynotes);
        res.status(201).json({
            sucesso: true,
            dados: newStickynotes,
        });
    }
    ValidarStickynotes(stknotes) {
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
    updateStickynotes(req, res) {
        const { id } = req.params;
        const { title, description } = req.body;
        const stickynotes = data_1.listSn.find((value) => value.id === id);
        console.log(stickynotes);
        stickynotes.title = title;
        stickynotes.description = description;
        res.status(200).json({
            sucesso: true,
            dados: stickynotes,
        });
    }
    deleteStickynotes(req, res) {
        const { id } = req.params;
        const stickynotesIndex = data_1.listSn.findIndex((index) => index.id === id);
        if (stickynotesIndex === -1) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Anotação não encontrada !",
            });
        }
        data_1.listSn.splice(stickynotesIndex, 1);
        res.status(200).json({
            sucesso: true,
            mensagem: "Anotação deletada!",
        });
    }
}
const stickynotes = new Stickynotes();
exports.stickynotes = stickynotes;
