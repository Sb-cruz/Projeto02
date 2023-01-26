const express = require('express')

const router = express.Router();
router.get('/',(req, res) => {
    res.send("Rota index no diretorio router");    
});

module.exports = router;