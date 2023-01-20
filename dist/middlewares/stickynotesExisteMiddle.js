"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stickynotesExiste = void 0;
const data_1 = require("../data");
function stickynotesExiste(req, res, next) {
    const { id } = req.params;
    const filterStickynotes = data_1.listSn.find((stknotes) => stknotes.uid === id);
    console.log(filterStickynotes);
    if (!filterStickynotes) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Anotações não encontradas!",
            dados: null,
        });
    }
    next();
}
exports.stickynotesExiste = stickynotesExiste;
