var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Cinema'});
});

router.get('/filmes', function(req, res) {
  axios.get('http://localhost:3000/filmes').then(resp => {
    res.render('filmes', {title: 'Filmes', lfilmes: resp.data, titulo: "Lista de Filmes"})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/filmes/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:3000/filmes/${id}`).then(resp => {
    res.render('filme', {title: id, f: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/filmes/:id/edit', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:3000/filmes/${id}`).then(resp => {
    res.render('filmeEditFormPage', {title: id, f: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/filmes/:id/delete', function(req, res) {
  id = req.params.id
  axios.delete(`http://localhost:3000/filmes/${id}`).then(resp => {
    console.log(resp.data)
    res.redirect('/filmes')
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.post('/filmes/:id/edit', function(req, res) {
  id = req.params.id
  if (typeof req.body.cast === 'string') {
    req.body.cast = [req.body.cast];
  }
  if (typeof req.body.genres === 'string') {
    req.body.genres = [req.body.genres];
  }
  result = req.body
  axios.put(`http://localhost:3000/filmes/${id}`, result).then(resp => {
    console.log(resp.data)
    res.redirect('/filmes')
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});


router.get('/atores/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:3000/filmes`).then(resp => {
    res.render('ator', {title: id, ator: id, lfilmes: resp.data.filter(filme => filme['cast'].includes(id))})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});


module.exports = router;
