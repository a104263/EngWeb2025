var express = require('express');
var router = express.Router();
var Books = require('../controllers/book')

router.get('/', function(req, res, next) {
  if(req.query.character){
    Books.listByCharacter(req.query.character)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else if(req.query.genre){
    Books.listByGenre(req.query.genre)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else{
    Books.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/genres', function(req, res, next) {
  Books.listGenres()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/characters', function(req, res, next) {
  Books.listCharacters()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});


router.get('/:id', function(req, res, next) {
  Books.findById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.post('/registo', function(req, res, next) {
  Books.insert(req.body)
  .then(data => {
    res.status(201).redirect('/Books');
  })
  .catch(erro => {
    res.status(500).render("error", erro);
  });
});


router.put('/:id', function(req, res, next) {
  return Books.update(req.params.id, req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  return Books.delete(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;