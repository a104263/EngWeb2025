# Exercício 1.1 - Setup
Para este exercício, fiz um script [processData.py](processData.py), onde separo os géneros, personagens e autores em listas, e acrescentei um campo _id, igual ao bookId.


Utilização:

Criação da base de dados, tendo um container já criado:
```
$ docker cp dataset.json mongoEW:/tmp
$ docker exec -it mongoEW sh
$ mongoimport -d livros -c livros /tmp/livros.json --jsonArray
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

O servidor ficará na porta 17001, portanto, para aceder à página inicial é necessário colocar no browser **localhost:17001**.