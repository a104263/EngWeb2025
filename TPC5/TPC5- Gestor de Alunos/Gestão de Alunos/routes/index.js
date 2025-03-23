var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Alunos'});
});

router.get('/alunos', function(req, res) {
  axios.get('http://localhost:3000/alunos').then(resp => {
    res.render('alunos', {title: 'Alunos', lalunos: resp.data, titulo: "Lista de Alunos"})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/alunos/registo', function(req, res) {
    res.render('alunoFormPage', {title: 'Registar aluno'})
});

router.get('/alunos/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:3000/alunos/${id}`).then(resp => {
    res.render('aluno', {title: id, a: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/alunos/:id/edit', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:3000/alunos/${id}`).then(resp => {
    res.render('alunoEditFormPage', {title: id, a: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/alunos/:id/delete', function(req, res) {
  id = req.params.id
  axios.delete(`http://localhost:3000/alunos/${id}`).then(resp => {
    console.log(resp.data)
    res.redirect('/alunos')
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.post('/alunos/registo', function(req, res) {
  result = req.body
  axios.post(`http://localhost:3000/alunos/registo`, result).then(resp => {
    console.log(resp.data)
    res.redirect('/alunos')
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.post('/alunos/:id/edit', function(req, res) {
  id = req.params.id
  result = req.body
  axios.put(`http://localhost:3000/alunos/${id}`, result).then(resp => {
    console.log(resp.data)
    res.redirect('/alunos')
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

module.exports = router;
