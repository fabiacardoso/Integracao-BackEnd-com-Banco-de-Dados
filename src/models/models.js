const mongoose = require('mongoose') // importa o mongoose

//cria o esqueleto de como nossos dados serao guardados no Mongo
const filmesSchema = new mongoose.Schema({ 
    //titulo
    titulo: {
        type: String,
        required: true
    },
    //genero
    genero: {
        type: Array,
        required: true
    },
    //diretor
    diretor: {
        type: String,
        required: true
    },
    //data de criacao
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    },
    // país de origem
    pais: {
        type: String,
        required: true
    }
})

//exporta o esqueleto do nosso documento para usarmos na nossa lógica, lembrando que em conjunto esses documentos já formarão a nossa collection 
module.exports = mongoose.model('filmes', filmesSchema)