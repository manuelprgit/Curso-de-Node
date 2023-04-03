const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',err => {
  return err
});

app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('home');
});

app.get('/generic',(req,res) => {
  res.render('generic');
});

app.get('/elements',(req,res) => {
  res.render('elements');
});

// app.get('/generic',(req,res) => {
//   // res.sendFile(__dirname+'/public/generic.html');
// })

// app.get('/elements',(req,res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })

app.listen(port,() => {
  console.log('listening on port '+ port)
})
