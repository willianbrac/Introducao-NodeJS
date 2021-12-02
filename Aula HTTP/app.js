const http = require("http")

const host = 'localhost'
const port = 9070

const server = http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo!</h1><h2>Site de teste</h2>");
})

server.listen(port, host, () => {
    console.log(`Servidor ativo em http://${host}:${port}`)
})

