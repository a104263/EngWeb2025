# TPC6 - Contratos
## 2025-03-26
### Inês Silva Marques - A104263
![A minha foto](../foto.jpg)

Neste trabalho de casa, o objetivo era concluir o servidor de informações sobre contratos públicos começado nas aulas. Para isso, ao que fizemos na aula, acrescentei um novo serviço, na pasta Servidor contratos, que corresponde à interface com o utilizador, conforme o especificado no enunciado.


Utilização:

Criação da base de dados, tendo um container já criado:
```
$ docker cp contratos.json mongoEW:/tmp
$ docker exec -it mongoEW sh
$ mongoimport -d contratos -c contratos /tmp/contratos.json --jsonArray
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

O servidor ficará na porta 16001, portanto, para aceder à página inicial é necessário colocar no browser **localhost:16001**.