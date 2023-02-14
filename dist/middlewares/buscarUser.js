"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarUser = void 0;
const data_1 = require("../data");
function buscarUser(req, res, next) {
    const { email } = req.params;
    const user = data_1.list.find((value) => value.email === email);
    if (!user) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Usuario não encontrado!",
            dados: null,
        });
    }
    next();
}
exports.buscarUser = buscarUser;
