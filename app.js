//Fazendo a importação do express
const express = require('express');
const mustache = require('mustache-express')
const router = require('./routes/index');

//Configurações básicas do aplicativo
const app = express();
app.use("/", router); //Foi passada a rota criada anteriormente

app.use(express.json());

app.engine('mst', mustache());  //Config o motor, extensão utilizada
app.set('view engine', 'mst');  //Setar motor visual

app.set('views', __dirname + '/views');

module.exports = app; //exporta o app, para a importação do mesmo no server 