var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res) {
  axios.get('http://localhost:17000/books').then(resp => {
    res.render('livros', {title: 'livros', lLivros: resp.data, titulo: "Listagem de livros"})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/entidades/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:17000/books`).then(resp => {
    l = resp.data.filter((livro) => livro['author'].includes(id))
    res.render('autor', {title: id, lAutor: l, num: l.length})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});


router.get('/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:17000/books/${id}`).then(resp => {
    res.render('livro', {title: id, l: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

module.exports = router;
