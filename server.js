const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

mongoose.set('strictQuery', false);
/* 
//Conexão com Banco de Dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});     //String de conexão como parametro
mongoose.Promise = global.Promise;                                                             //Liberando funcionalidades para o mongoose
mongoose.connection.on('error', (error) => {
    console.error("ERROR: "+error.message);
}); */

//Conexão WebServer  
app.set('port', process.env.PORT || 7777); 
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: "+server.address().port);
})