const express = require("express")
const app = express() 

//enviando o nome por parâmetro
//req são os dados enviados pelo usuário
app.get("/oi/:nome/:cargo",function(req,res){
    var nome = req.params.nome
    var cargo = req.params.cargo
    res.send("Seja bem vindo "+cargo+nome)
})

//parametro opcional é so colocar ? ao lado
// o if executa quando é passado algum parametro
app.get("/blog/:email?", function(req,res){
    var email = req.params.email
    if(email){
        res.send("willian@gmail.com")
    }else{
    res.send("willian.blog.br")
    }
})

//query params = parametros dinâmicos
app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else {
        res.send("Nenhum canal informado!")
    }
    
})
//para teste: http://localhost:8900/canal/youtube?canal=qualquercanal

app.listen(8900, function(erro){
    if(erro){
        console.log("Ocorreu um problema!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})

