const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//cors
app.use(cors())

// bodyParser
app.use(express.json());


//models
    require('./src/models/Produtos')
    const Produtos = mongoose.model('produtos')

    require('./src/models/Contato')
    const Contato = mongoose.model('contato')

// conexao db
    require('./src/db/Connect')

app.get("/produtos", async(req, res) => {
    const produtosResponse = await Produtos.find()
    const produtosJson = await produtosResponse

    return res.json(produtosJson)
});

app.post('/contato', async (req, res) => {
    console.log(req.body);
    const novoContato = new Contato({
        nome: req.body.nome,
        email: req.body.email,
        cidade: req.body.cidade,
        uf: req.body.uf,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem
    });
    novoContato.save()

    res.json({message: "Nova mensagem", contato: novoContato})
})



app.listen(3333, () => {
  console.log("Servidor rodando na 3333");
});
