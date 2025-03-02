var http = require('http')
var axios = require('axios')
const { parse } = require('querystring');

var templates = require('./templates')       
var static = require('./static.js')

function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

var alunosServer = http.createServer((req, res) => {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                if(req.url =='/' || req.url == '/alunos'){
                    axios.get('http://localhost:3000/alunos').then(resp => {
                        data = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.studentsListPage(data, d))
                        res.end()
                    })
                    .catch(error => {
                        console.log(error);
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.errorPage(error))
                        res.end()
                    }); 
                    break;
                }
                else if(req.url.match(/\/alunos\/(A|PG)\d+$/)){
                    id = req.url.split(`/`)[2]
                    axios.get(`http://localhost:3000/alunos/${id}`).then(resp => {
                        data = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.studentPage(data,d))
                        res.end()
                    })
                    .catch(error => {
                        console.log(error);
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.errorPage(error))
                        res.end()
                    }); 
                    break;
                }
                else if(req.url == '/alunos/registo'){
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write(templates.studentFormPage(d));
                    res.end()
                }
                else if(req.url.match(/\/alunos\/edit\/(A|PG)\d+$/)){
                    id = req.url.split(`/`)[3]
                    axios.get(`http://localhost:3000/alunos/${id}`).then(resp => {
                        data = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.studentFormEditPage(data,d))
                        res.end()
                    })
                    .catch(error => {
                        console.log(error);
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                        res.write(templates.errorPage(error))
                        res.end()
                    }); 
                    break;
                }
                else if(req.url.match(/\/alunos\/delete\/(A|PG)\d+$/)){
                    id = req.url.split(`/`)[3]
                        axios.delete(`http://localhost:3000/alunos/${id}`).then(resp => {
                                data = resp.data;
                                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(`<pre>Registo eliminado</pre>`)
                                res.end()
                            })
                            .catch(error => {
                                console.log(error);
                                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(templates.errorPage(error))
                                res.end()
                            }); 
                }
                else{
                    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write(templates.errorPage("URL "+req.url+" não encontrado"))
                    res.end()
                }
                break;
            case "POST":
                if(req.url == '/alunos/registo'){
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.post('http://localhost:3000/alunos', result).then(resp => {
                                data = resp.data;
                                res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(`<pre>Registo inserido: ${JSON.stringify(data)}</pre>`)
                                res.end()
                            })
                            .catch(error => {
                                console.log(error);
                                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(templates.errorPage(error))
                                res.end()
                            }); 
                        }
                        else{
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                            res.write(templates.errorPage(error))
                            res.end()
                        }
                    }
                    )
                }
                else if(req.url.match(/\/alunos\/edit\/(A|PG)\d+$/)){
                    id = req.url.split(`/`)[3]
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.put(`http://localhost:3000/alunos/${id}`, result).then(resp => {
                                data = resp.data;
                                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(`<pre>Registo alterado</pre>`)
                                res.end()
                            })
                            .catch(error => {
                                console.log(error);
                                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(templates.errorPage(error))
                                res.end()
                            }); 
                        }
                        else{
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                            res.write(templates.errorPage(error))
                            res.end()
                        }
                    }
                    )
                }
                else{
                    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write(templates.errorPage("URL "+req.url+" não encontrado"))
                    res.end()
                }
                break;
            case "PUT":
                if(req.url.match(/\/alunos\/edit\/(A|PG)\d+$/)){
                    id = req.url.split(`/`)[3]
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.put(`http://localhost:3000/alunos/${id}`, result).then(resp => {
                                data = resp.data;
                                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(`<pre>Registo alterado</pre>`)
                                res.end()
                            })
                            .catch(error => {
                                console.log(error);
                                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                res.write(templates.errorPage(error))
                                res.end()
                            }); 
                        }
                        else{
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                            res.write(templates.errorPage(error))
                            res.end()
                        }
                    }
                    )
                }
                else{
                    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write(templates.errorPage("URL "+req.url+" não encontrado"))
                    res.end()
                }
                break;   
            default: 
                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(templates.errorPage("Método não suportado: "+req.method))
                res.end()
                break;
        }
    }
})

alunosServer.listen(7777, ()=>{
    console.log("Servidor à escuta na porta 7777...")
})



