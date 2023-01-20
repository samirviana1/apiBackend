"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaStickynotes = void 0;
const stickynotes_1 = require("../services/stickynotes");
function validaStickynotes(req, res, next) {
    const { id, title, description, uid } = req.body;
    const stickynotesValida = stickynotes_1.stickynotes.ValidarStickynotes({
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
exports.validaStickynotes = validaStickynotes;
