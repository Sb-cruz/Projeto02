//Fazendo a importação do express
const express = require('express');

//Notas (Quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/',(req, res) => {
    res.send("Eu consegui...");    
});

//Configurações básicas do aplicativo
const app = express();
app.use("/", router); //Foi passada a rota criada anteriormente

module.exports = app; //exporta o app, para a importação do mesmo no server 