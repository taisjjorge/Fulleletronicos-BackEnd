const mongoose = require('mongoose')

function connect() {
    mongoose
    .connect('mongodb://localhost/fulleletronicos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conectado com o banco 'fulleletronicos' ");
    }).catch((error) => {
        console.log(`Erro ao tentar a conexão ${error}`)
    })
}

module.exports = connect()