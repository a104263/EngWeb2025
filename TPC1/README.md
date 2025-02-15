# TPC1 - Dataset de reparações
## 2025-02-15
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Neste TPC foi-nos pedido, para consolidarmos a matéria das últimas aulas, que implementassemos um pequeno servidor para aceder aos dados do dataset de reparações automóveis.
Para isto foi necessário alterar o ficheiro JSON para que as estruturas das **intervenções** e **viaturas** estivessem separadas da estrutura de reparações. Para este efeito, escrevi um pequeno script em python [format_json.py](/TPC1-%20Reparações/format_json.py) que, dado o JSON original, adiciona todas as intervenções e viaturas no final, gerando o ficheiro [dataset_reparacoes_novo](TPC1-%20Reparações/dataset_reparacoes_novo.json).
Feito isto, é possível criar um servidor com `json-server` que dá acesso a todos os dados necessários.
Depois disso, implementei um servidor [reparacoes-server.js](TPC1-%20Reparações/reparacoes-server.js) que mostra as infomações conforme o pedido, ou seja, tem uma página inicial com as opções de listar reparações, intervenções ou viaturas, páginas para estas listagens, e um página para a consulta de informações de cada elemento destas listas.

Utilização:
Para fazer a transformação do ficheiro JSON, executar o seguinte:
```
$ py format_json.py
```

Criar o servidor de dados:
```
$ json-server --watch dataset_reparacoes_novo.json
```

Executar o servidor:
```
$ node reparacoes-server.js
```

O servidor ficará na porta 3001, portanto, para aceder à página inicial é necessário colocar no browser **localhost:3001**.