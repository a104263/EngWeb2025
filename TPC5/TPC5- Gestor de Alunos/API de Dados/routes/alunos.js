var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunos')

/* GET alunos list */
router.get('/', function(req, res, next) {
  Aluno.list()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.post('/registo', function(req, res, next) {
  Aluno.insert(req.body)
  .then(data => {
    res.status(201).redirect('/alunos');
  })
  .catch(erro => {
    res.status(500).render("error", erro);
  });
});


router.put('/:id', function(req, res, next) {
  return Aluno.update(req.params.id, req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  return Aluno.delete(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;