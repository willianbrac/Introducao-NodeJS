const express = require("express")  //importando o express

const app = express()    // carrega todo o express dentro da variavel app


//criando uma rota
app.get("/", function(req, res){
    res.send("Bem vindo!")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/2canal/youtube", function(req,res){
    res.send("muito bom!")
})

app.listen(9001, function(erro){
    if(erro){
        console.log("Ocorreu um problema!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})