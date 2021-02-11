const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produtos = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    }

})

mongoose.model('produtos', Produtos)