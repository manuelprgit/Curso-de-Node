const express = require('express')
const app = express();
const port = 8080;

app.use(express.static('public'))

app.get('*',(req,res) => {
    res.sendFile(__dirname,'./public/views/404.html')  
})

app.listen(port,() => {
  console.log('listening on port '+port);
})

// const express = require('express');
// const app = express();
// const port = 8080;

// app.use( express.static('public') ); 

// app.get('*',(req,res) => {
//     res.sendFile(__dirname + '/public/views/404.html');
// });

// app.listen(port,e=>{
//     console.log(`listening on port http://localhost:${port}`);
// });