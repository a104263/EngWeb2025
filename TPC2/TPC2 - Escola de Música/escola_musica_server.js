import {createServer} from 'http' 
import axios from 'axios';
import {pagInicial, pagAlunos, pagCursos, pagInstrumentos, pagAluno, pagCurso, pagInstrumento} from './mypages.js'
import {readFile} from 'fs'

var myServer = createServer(function (req, res) {
    var d = new Date().toISOString().substring(0,16)
    console.log(req.method + " " + req.url + " " + d)

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(pagInicial(d))
        res.end()
    }

    
    else if (req.url.match(/w3\.css$/)){
        readFile("w3.css", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end(erro)
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }

    else if (req.url.match(/favicon\.ico$/)){
        readFile("icone.png", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end(erro)
            }
            else{
                res.writeHead(200, {'Content-Type': 'image/png'})
                res.end(dados)
            }
        })
    }

    else if(req.url == '/alunos'){
        axios.get('http://localhost:3000/alunos')
        .then(function(resp){
            var alunos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pagAlunos(alunos,d))
            res.end()
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else if (req.url.match(/\/alunos\/.+/)){
        var id = req.url.split("/")[2]
        axios.get(`http://localhost:3000/alunos/?id=${id}`)
        .then(function(resp){
            var alunos = resp.data
            var aluno = alunos[0]
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pagAluno(aluno,d))
            res.end()
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else if(req.url == '/cursos'){
        axios.get('http://localhost:3000/cursos')
        .then(function(resp){
            var cursos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pagCursos(cursos,d))
            res.end()
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else if (req.url.match(/\/cursos\/.+/)){
        var id = req.url.split("/")[2]
        axios.get(`http://localhost:3000/cursos/?id=${id}`)
        .then(function(resp){
            var cursos = resp.data
            var curso = cursos[0]
            axios.get(`http://localhost:3000/alunos/?curso=${id}`)
            .then(function(alunos){
                var alunosCurso = alunos.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(pagCurso(curso, alunosCurso,d))
                res.end()
            })
            .catch(erro=>{
                console.log("Erro: "+erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write("Erro")
                res.end()
            })
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else if(req.url == '/instrumentos'){
        axios.get('http://localhost:3000/instrumentos')
        .then(function(resp){
            var instrumentos = resp.data
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write(pagInstrumentos(instrumentos,d))
            res.end()
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else if (req.url.match(/\/instrumentos\/.+/)){
        var id = req.url.split("/")[2]
        axios.get(`http://localhost:3000/instrumentos/?id=${id}`)
        .then(function(resp){
            var instrumentos = resp.data
            var instrumento = instrumentos[0]
            axios.get(`http://localhost:3000/alunos/?instrumento=${instrumento["#text"]}`)
            .then(function(alunos){
                var alunosInstrumento = alunos.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(pagInstrumento(instrumento, alunosInstrumento,d))
                res.end()
            })
            .catch(erro=>{
                console.log("Erro: "+erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write("Erro")
                res.end()
            })
        })
        .catch(erro=>{
            console.log("Erro: "+erro)
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("Erro")
            res.end()
        })
    }

    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.write("Erro")
        res.end()
    }
}).listen(3001)
console.log('Servidor à escuta na porta 3001')
