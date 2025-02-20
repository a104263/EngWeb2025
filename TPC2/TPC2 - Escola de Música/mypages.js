export function pagInicial(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>Listas</h1>
                </header>
                <div class="w3-container">
                    <ul>
                        <li>
                            <a href="/alunos">Lista de Alunos</a>
                        </li>
                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li>
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>
                    </ul>
                </div>

                <footer class="w3-container w3-pale-yellow w3-display-bottomleft">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagAlunos(alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>Lista de Alunos</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                        </tr>`
    alunos.forEach(aluno => {
        pagHTML += `
        <tr>
            <td><a href="/alunos/${aluno.id}">${aluno.id}</a></td>
            <td>${aluno.nome}</td>
            <td>${aluno.dataNasc}</td>
        </tr>
        `
    });
    pagHTML += `
                    </table>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagAluno(aluno, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>${aluno.nome}</h1>
                </header>
                <div class="w3-container">
                    <h3>Identificador: ${aluno.id}<h3>
                    <h3>Data de Nascimento: ${aluno.dataNasc}<h3>
                    <h3>Curso: ${aluno.curso}, ${aluno.anoCurso}º ano<h3>
                    <h3>Instrumento: ${aluno.instrumento}<h3>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagCursos(cursos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>Lista de Cursos</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Designação</th>
                            <th>Duração</th>
                        </tr>`
    cursos.forEach(curso => {
        pagHTML += `
        <tr>
             <td><a href="/cursos/${curso.id}">${curso.id}</a></td>
            <td>${curso.designacao}</td>
            <td>${curso.duracao}</td>
        </tr>
        `
    });
    pagHTML += `
                    </table>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagCurso(curso, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>${curso.designacao}</h1>
                </header>
                <div class="w3-container">
                    <h3>Identificador: ${curso.id}<h3>
                    <h3>Duração: ${curso.duracao} anos<h3>
                    <h3>Instrumento: ${curso.instrumento["#text"]}<h3>
                </div>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>`
    alunos.forEach(aluno => {
        pagHTML += `
        <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
        </tr>
        `
    });
    pagHTML += `
                    </table>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagInstrumentos(instrumentos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>Lista de Instrumentos</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>`
    instrumentos.forEach(instrumento => {
        pagHTML += `
        <tr>
            <td><a href="/instrumentos/${instrumento.id}">${instrumento.id}</a></td>
            <td>${instrumento["#text"]}</td>
        </tr>
        `
    });
    pagHTML += `
                    </table>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}

export function pagInstrumento(instrumento, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue-gray">
                    <h1>${instrumento["#text"]}</h1>
                </header>
                <div class="w3-container">
                    <h3>Identificador: ${instrumento.id}<h3>
                </div>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>`
    alunos.forEach(aluno => {
        pagHTML += `
        <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
        </tr>
        `
    });
    pagHTML += `
                    </table>
                </div>
            </div> 
        </body>
    </html>
    `
    return pagHTML
}