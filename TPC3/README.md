# TPC3 - Alunos
## 2025-03-02
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Neste TPC teríamos de completar o servidor de informações de alunos começado na aula prática. Durante a aula, para ter os dados dos alunos em formato JSON em vez de CSV, usamos uma ferramenta online que fez essa conversão, e fizemos as alterações necessárias para transformar o json resultante num objeto json. 
Assim pudemos criar o servidor de dados com json-server. 
Para implementar o servidor usamos o programa [templates.js](/TPC3%20-%20Alunos/templates.js) fornecido, adaptando-o quando necessário, e, no [alunos_server.js](/TPC3%20-%20Alunos/alunos_server.js) definimos a resposta a alguns dos pedidos que poderiam ser feitos, ficando para TPC lidar com os outros pedidos possíveis.

Utilização:

Criar o servidor de dados:
```
$ json-server --watch alunos.json
```

Executar o servidor:
```
$ node alunos_server.js
```

O servidor ficará na porta 7777, portanto, para aceder à página inicial é necessário colocar no browser **localhost:7777**.