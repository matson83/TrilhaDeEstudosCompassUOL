const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'
const url = 'http://' + hostname + ':' + port;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem Vindo<br/>Curso Node.js</h1><p>URL: ' + url + '</p>');
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
})

const open = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');