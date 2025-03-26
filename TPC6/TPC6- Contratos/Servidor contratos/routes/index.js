var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res) {
  axios.get('http://localhost:16000/contratos').then(resp => {
    res.render('contratos', {title: 'contratos', lContratos: resp.data, titulo: "Lista de contratos"})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

router.get('/entidades/::id', function(req, res) {
  nipc = req.params.id
  axios.get(`http://localhost:16000/contratos?entidade=${nipc}`).then(resp => {
    var somatorio = resp.data.map(contrato => contrato.precoContratual).reduce((acc, preco) => acc + preco);
    res.render('entidade', {nipc: nipc,nomeEntidade: resp.data[0]['entidade_comunicante'], sum : somatorio, lContratos: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});


router.get('/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:16000/contratos/${id}`).then(resp => {
    res.render('contrato', {title: id, c: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

module.exports = router;
