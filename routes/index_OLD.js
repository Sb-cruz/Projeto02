const { json } = require('express');
const express = require('express')

const router = express.Router();

router.get('/posts/:slug',(req, res) => {
    let slug = req.params.slug
    let id = req.params.id;
    res.send("Slug do post: "+slug);    
});

router.get('/rota1',(req, res) => {
    res.send("Primeira rota");    
}); 

router.get('/rota2',(req, res) => {
/*     let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let idade = req.query.idade;
 */
    res.json(req.query);

    /* res.json({
        dados: nome+' '+sobrenome+' tem ' + idade
    }) */
    
    /*res.send("Olá " + nome + " você tem " + idade + " anos de vida"); */
        
});

module.exports = router;   