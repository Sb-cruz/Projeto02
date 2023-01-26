//Fazendo a importação do express
const express = require('express');
const router = require('./routes/index');

//Configurações básicas do aplicativo
const app = express();
app.use("/", router); //Foi passada a rota criada anteriormente

module.exports = app; //exporta o app, para a importação do mesmo no server 