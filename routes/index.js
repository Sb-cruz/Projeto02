const express = require('express')

const router = express.Router();

router.get('/',(req, res) => {
    res.render('home', {
        'nome' : 'João da Silva',
        'idade' : 38
    });     //Para renderizar
});

module.exports = router;