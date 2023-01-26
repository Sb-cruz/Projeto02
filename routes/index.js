const express = require('express')

const router = express.Router();

router.get('/',(req, res) => {
    let obj = {
        nome : req.query.nome,
        idade : req.query.idade,
        mostrar : true,
        disciplinas : [
            {nome: 'Material1', qt : '20 aulas'},
            {nome: 'Material2', qt : '10 aulas'}
        ],
        frutas : ['banana', 'maca', 'melancia'], 
        teste : "<strong>Teste Negrito</strong>"
    }
    res.render('home', obj);     //Para renderizar
});

module.exports = router;