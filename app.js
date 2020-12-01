const http = require('http');
/* const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head> <title> Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>')
        res.write('</html>');
       return res.end();
    }

    if (url === '/message' && method ==='POST'){
        const body= [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
       req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();;
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();

            });
        });
    }
   res.setHeader('Content-type','text/html');
   res.write('<html>');
   res.write('<head> <title> MY first Page</title><head>');
   res.write('<body>Hello and welcome to my world</body>')
   res.write('</html>');
   res.end();
}); */

const express = require('express');
const app = express();
const server = http.createServer(app);
app.use((req,res,next) =>{
    console.log('In the middleware');
    next();
});
app.use((req,res,next) => {
    console.log('In the second middleware');
    res.send('<h1>Hello from express</h1>')
})

server.listen(3000);