const express = require('express')

const router = express.Router();

router.get('/',(req, res) => {
    res.send("Endereço principal");    
});

router.get('/rota1',(req, res) => {
    res.send("Primeira rota");    
});

router.get('/rota2',(req, res) => {
    res.send("Segunda rota");    
});

module.exports = router; 