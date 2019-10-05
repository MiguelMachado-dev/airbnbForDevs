const express = require("express");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/**
 * req.query = Acessar query params (para filtros) Ex: ?cor=azul
 * req.params = Acessar route params (para edicao, delete) Ex: /users/1
 * req.body = Acessar corpo da requisicao (para criacao, edicao)
 */
routes.post("/sessions", SessionController.store);

module.exports = routes;
