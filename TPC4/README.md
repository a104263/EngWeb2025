# TPC4 - Cinema
## 2025-03-14
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Neste TPC teríamos de completar a aplicação de informações de filmes, começada durante a aula teórica. Para isso, adicionei as funcionalidade de consultar as informações de um filme, de editar essas informações (podendo alterar o título, o ano, e remover atores ou géneros), de apagar um filme e de consultar as informações de um ator, ou seja, o seu nome, e os filmes em que participou.
Para utilizar os métodos **PUT** e **DELETE** tive de acrescentar um campo **id** aos filmes, tendo feito para isso o script [addId.py](/TPC4%20-%20App%20Cinema/addId.py).

Utilização:

Criar o servidor de dados:
```
$ json-server --watch cinema.json
```

Executar o servidor:
```
$ npm init
$ npm install
$ npm start
```

O servidor ficará na porta 2510, portanto, para aceder à página inicial é necessário colocar no browser **localhost:2510**.