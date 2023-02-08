const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('you are at main page');
    }
    else if(req.url === '/about'){
        res.end('here is our about page');
    }
    res.end(`
    <h1> OOPSIES !!!!!!! </h1>
    <p> Go back where you came from </p>
    <a href= '#'> click here or you'll die </a>
    `);
})

server.listen(6969);