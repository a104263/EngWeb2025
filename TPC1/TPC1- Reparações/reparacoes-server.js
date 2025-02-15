const http = require('http')
const axios = require('axios')

http.createServer((request, response) => {
    console.log("METHOD " + request.method)
    console.log("URL " + request.url)

    switch(request.method){
        case 'GET':
            if(request.url == "/"){
                response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                response.write("<h1>Oficina Automóvel</h1>")
                response.write("<h3><a href= '/reparacoes'/a>Lista de Reparações</h3>")
                response.write("<h3><a href= '/intervencoes'/a>Lista de Intervenções</h3>")
                response.write("<h3><a href= '/viaturas'/a>Lista de Viaturas</h3>")
                response.end();
            }
            else if(request.url == "/reparacoes"){
                axios.get('http://localhost:3000/reparacoes').then(resp => {var reparacoes = resp.data
                response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                response.write(`<h6><a href='/'>Voltar</a></h6>`);
                response.write("<h1>Reparações</h1>")
                response.write("<ul>")
                reparacoes.forEach(element => {
                    response.write(`<li><a href='/reparacoes/${element.nif}'>${element.nome}</a></li>`)
                });
                response.write("</ul>")
                response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                console.log(err)
                response.end();})
            }
            else if (request.url.match(/\/reparacoes\/.+/)){
                var id = request.url.split("/")[2]
                axios.get(`http://localhost:3000/reparacoes/?nif=${id}`).then(resp => {var reparacoes = resp.data
                    var reparacao = reparacoes[0]
                    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    response.write(`<h1>${reparacao.nome}</h1>`)
                    response.write(`<p>Cliente: ${reparacao.nome}</p>`)
                    response.write(`<p>NIF: ${reparacao.nif}</p>`)
                    response.write(`<p>Data: ${reparacao.data}</p>`)
                    response.write(`<p>Número de Intervenções: ${reparacao.nr_intervencoes}</p>`)
                    response.write(`<h6><a href='/reparacoes'>Voltar</a></h6>`); 
                    response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    response.end();})
            }
            else if(request.url == "/intervencoes"){
                axios.get('http://localhost:3000/intervencoes').then(resp => {var intervencoes = resp.data
                    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    response.write(`<h6><a href='/'>Voltar</a></h6>`); 
                    response.write("<h1>Intervenções</h1>")
                    response.write("<ul>")
                    intervencoes.forEach(element => {
                        response.write(`<li><a href='/intervencoes/${element.codigo}'>${element.nome}</a></li>`)
                    });
                    response.write("</ul>")
                    response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    response.end();})
            }
            else if (request.url.match(/\/intervencoes\/.+/)){
                var id = request.url.split("/")[2]
                axios.get(`http://localhost:3000/intervencoes/?codigo=${id}`).then(resp => {var intervencoes = resp.data
                    var intervencao = intervencoes[0]
                    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    response.write(`<h1>${intervencao.nome}</h1>`)
                    response.write(`<p>Intervenção: ${intervencao.nome}</p>`)
                    response.write(`<p>Código da Intervenção: ${intervencao.codigo}</p>`)
                    response.write(`<p>Descrição: ${intervencao.descricao}</p>`)
                    response.write(`<h6><a href='/intervencoes'>Voltar</a></h6>`); 
                    response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    response.end();})
            }
            else if(request.url == "/viaturas"){
                axios.get('http://localhost:3000/viaturas').then(resp => {var viaturas = resp.data
                    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    response.write(`<h6><a href='/'>Voltar</a></h6>`);
                    response.write("<h1>Viaturas</h1>")
                    response.write("<ul>")
                    viaturas.forEach(element => {
                        response.write(`<li><a href='/viaturas/${element.matricula}'>${element.matricula}</a></li>`)
                    });
                    response.write("</ul>")
                    response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    response.end();})
            }
            else if (request.url.match(/\/viaturas\/.+/)){
                var id = request.url.split("/")[2]
                axios.get(`http://localhost:3000/viaturas/?matricula=${id}`).then(resp => {var viaturas = resp.data
                    var viatura = viaturas[0]
                    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
                    response.write(`<h1>${viatura.marca+" "+viatura.modelo}</h1>`)
                    response.write(`<p>Marca: ${viatura.marca}</p>`)
                    response.write(`<p>Modelo: ${viatura.modelo}</p>`)
                    response.write(`<p>Matrícula: ${viatura.matricula}</p>`)
                    response.write(`<h6><a href='/viaturas'>Voltar</a></h6>`);
                    response.end();}).catch(err => {response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'})
                    console.log(err)
                    response.end();})
            }
            else{
                response.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'})
                response.end()
            }
            break;
        default : 
            response.writeHead(405, {'Content-Type' : 'text/html;charset=utf-8'})
            response.end()
            break;
    }
}).listen(3001)

console.log("Servidor à escuta na porta 3001")