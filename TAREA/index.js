require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');


const app = express(); 
const port = process.env.PORT;

//handelbars
app.set('view engine', 'hbs');
app.set('views', './public/views')

hbs.registerPartials(__dirname + '/public/views/partials',err => console.log(err));

app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('home');
});

app.get('/generic',(req,res) => {
  res.render('generic');
})

app.get('/elements',(req,res) => {
  res.render('elements');
})
 
app.listen(port,() => {
  console.log('listening on port '+ port);
})
