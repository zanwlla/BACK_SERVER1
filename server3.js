//abrir uma pasta que contém html e ezecutar através de estrutura de decisão de uma página selecionada

//sistema de rotas simples 
const http = require('http');
const fs = require('fs');

let porta=3000;
let host='localhost';

//criar servidor
const server = http.createServer((req,res)=>{
    //declararação do header
    res.setHeader('content-type','text/html');
    //criando as rotas
    let html_page =''; //indica qual página vai ser aberta

    //usuário indica a url
    switch (req.url){
        case '/': //boot que carrega para a página home
            html_page='home.html';
            res.statusCode = 200; 
            break;
        case '/home': //sem digitar home ou digitando, ele leva para a página home
             html_page='home.html';
             res.statusCode = 200; 
             break;
        case '/servicos':
            html_page='servicos.html';
            res.statusCode = 200; 
            break;
        case '/sobre':
             html_page='sobre.html';
             res.statusCode = 200; 
             break;
        default: //caso não seja encontrado nenhuma das páginas acima, redirecionar para essa
             html_page='404.html';
             res.statusCode = 200; 
             break;

    }
    //preparando a abertura das páginas em html
    fs.readFile('./html/'+ html_page,(erro,data)=>{//lê o html-pasta //data é a exibição da página se não houver erro
        if(erro){
            console.log(erro);
            res.end();
        }else{
            res.write(data);
            res.end()
        }
    }) 
  
})

//inicializar servidor
server.listen(porta,host,()=>{
    console.log('Servidor em execução!');
})

//hora de criar a infra de html
//criar sistemas de rotas



