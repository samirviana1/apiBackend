"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaUser = void 0;
const user_1 = require("../services/user");
function validaUser(req, res, next) {
    const { id, name, email, password } = req.body;
    const userValido = user_1.user.validateUser({
        id,
        name,
        email,
        password,
    });
    if (!userValido.sucesso) {
        return res.json(userValido);
    }
    next();
}
exports.validaUser = validaUser;
