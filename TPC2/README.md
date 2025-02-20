# TPC2 - Escola de Música
## 2025-02-20
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Neste TPC2, tivemos de implementar um servidor que mostre as informações de uma escola de música, presentes no ficheiro [db.json](TPC2%20-%20Escola%20de%20Música/db.json). Assim, implementei um servidor [escola_musica_server.js](TPC2%20-%20Escola%20de%20Música/escola_musica_server.js) que, dados os pedidos, faz o pedido ao `json-server` dos dados necessários, e responde com a página correspondente do [mypages.js](TPC2%20-%20Escola%20de%20Música/mypages.js). No `mypages.js` será gerado o html da página pedida de acordo com os dados.
Este TPC foi util para poder consolidar a matéria das aulas, com a adição, em relação ao TPC1, de ligações entre as entidades (lista de alunos que frequentam um dado curso ou estudam um dado instrumento), da utilização de `w3-css` e a adição de um ícone na página.

Utilização:

Criar o servidor de dados:
```
$ json-server --watch db.json
```

Executar o servidor:
```
$ node escola_musica_server.js
```

O servidor ficará na porta 3001, portanto, para aceder à página inicial é necessário colocar no browser **localhost:3001**.