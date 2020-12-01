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
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product',(req,res,next) => {
  /*   console.log(req.body); */
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Products</button></form>');
    
});

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next) => {
    /* console.log('In the second middleware'); */
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);