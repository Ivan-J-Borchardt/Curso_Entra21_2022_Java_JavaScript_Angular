//O módulo express retorna uma função que instancia o express
const express = require("express")
const cors = require("cors")

//A função express cria uma instância de todo o framework express em app
const app = express()

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")
    //resp.header("Access-Control-Allow-Origin", "http://localhost:8080")

    app.use(cors())
    next()
})


const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/livros", function (req, resp) {

    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Meus livros favoritos </h1>
                </body>
            </html>
        `
    )
})

app.get("/hora", function (req, resp) {
    let horaCerta = new Date()
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Hora certa ${horaCerta} </h1>
                </body>
            </html>
        `
    )
})

app.get("/usuarios", function (req, resp) {

    //const users = ['Felisberto', 'Albertina', 'Annabella']

    const user = {
        nome: "Ivan", 
        cpf: "000.000.000-12", 
        email: "ivan.borchardt.cobol@gmail.com"
    }
    resp.json(user)

})

app.get("/sobre", function (req, resp) {

    resp.sendFile(__dirname + "/html/sobre.html")

})

app.get("/index", function (req, resp) {

    resp.sendFile(__dirname + "/html/index.html")

})

//Rota dinâmica
app.get("/ws/:cep", function (req, resp) {

    var cep = req.params.cep 
    console.log(cep);
    resp.json({cep})

})

//Rota dinâmica
app.get("/endereco/:cep", function (req, resp) {

    var cep = req.params.cep 

    resp.json({cep})

})

//Capturando parametros pelo metodo GET
app.get("/vars", function (req, resp) {
    let cpf  = req.query.nmCPF
    let nome = req.query.nmNome

    console.log(cpf);
    console.log(nome);

    resp.json({cpf, nome})
})



