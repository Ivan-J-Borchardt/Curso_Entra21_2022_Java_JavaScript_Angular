const http = require("http")

const servidor = http.createServer(function(req, resp){
    let percetRespA = 10
    //API = Application Programming Interface 
    
    //Rotas = Endpoint
    let html
    if (req.url == "/") {
        html =        
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Olá Pessoal!!! </h1>
                        <p>Resposta a: ${percetRespA}</p>
                    </body>
                </html>
            `
    } else if(req.url == "/livros"){
        html =        
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
    }
    resp.end(html)
})

servidor.listen(3001)