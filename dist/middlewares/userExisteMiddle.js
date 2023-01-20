"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExiste = void 0;
const data_1 = require("../data");
function userExiste(req, res, next) {
    const { email, name } = req.body;
    const user = data_1.list.some((value) => value.email === email || value.name === name);
    if (user) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Nome de usuario ou email já existe!",
            dados: null,
        });
    }
    next();
}
exports.userExiste = userExiste;
