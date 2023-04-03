const http = require('http');
let port = 8080;
http.createServer((req,res) => {
    
    res.write('Hello Word')
    res.end();
})
.listen( port )

console.log(`Listening on port ${port}`)