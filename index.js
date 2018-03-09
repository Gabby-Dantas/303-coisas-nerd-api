const express = require('express');
const cors = require('cors');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(expressMongoDb('mongodb://localhost/coisas-nerd'));
app.use(bodyParser.json());

app.get('/anime', function(req, res){
    req.db.collection('anime').find().toArray(function(erro, dados){
        res.send(dados);
    });
});

app.post('/anime', function(req, res){
    req.db.collection('anime').insert(req.body, function(erro, dados){
        res.send(dados);
    });
});

app.get('/cartoon', function(req, res){
    req.db.collection('cartoon').find().toArray(function(erro, dados){
        res.send(dados);
    });
});

app.post('/cartoon', function(req, res){
    req.db.collection('cartoon').insert(req.body, function(erro, dados){
        res.send(dados);
    });
});

app.listen(3000, function(){
    console.log('Funfando...');
});