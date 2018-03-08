const express = require('express');
const cors = require('cors');
const personagensAnime = require('./dados/anime.json');
const personagensCartoon = require('./dados/cartoon.json');

const app = express();
app.use(cors());

app.get('/anime', function(req, res){
    res.send(personagensAnime);
});

app.get('/cartoon', function(req, res){
    res.send(personagensCartoon);
});

app.listen(3000, function(){
    console.log('Funfando...');
});