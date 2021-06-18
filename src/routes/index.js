const express = require('express')

const router = express.Router()

router.get("/", (req,res) => res.status(200).send({
    mensagem : "Seja bem vinda(o) ao Servidor da Fábia" 
}))


module.exports = router