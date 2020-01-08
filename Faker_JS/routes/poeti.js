var express = require('express');
var router = express.Router();
var vettore_file = require ('../people.json')
/* GET home page. */


router.get('/', function(req, res, next) {
    console.log(vettore_file.persone);
  res.render('poeti', {poetiVettore : vettore_file.persone});
});

router.get('/nomePoeta/:email', function(req, res, next) {
    //console.log(req.params.email);
    let poeta_trovato = vettore_file.persone.find(poet => poet.email == req.params.email);
    console.log(poeta_trovato);
    res.render("poeta_trovato", {poeta: poeta_trovato});
    //res.render('index', { title: 'Express' });
});
module.exports = router;