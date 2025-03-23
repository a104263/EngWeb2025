# TPC5 - Gestor de Alunos
## 2025-03-23
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Este TPC consistia em, tendo o servidor de gestão de alunos realizado nas aulas práticas, fazer as adaptações necessárias de modo a funcionar com a API de dados também desenvolvida na última aula prática.

Utilização:

Criação da base de dados, tendo um container já criado:
```
$ docker cp alunos.json mongoEW:/tmp
$ docker exec -it mongoEW sh
$ mongoimport -d alunos -c alunos /tmp/alunos.json
```

Iniciar a API de dados:
```
$ npm init
$ npm install
$ npm start
```

Executar o servidor:
```
$ npm init
$ npm install
$ npm start
```

O servidor ficará na porta 2510, portanto, para aceder à página inicial é necessário colocar no browser **localhost:2510**.