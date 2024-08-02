const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world')
  }
  else if (req.url === '/twitter') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello twitter')
  }
  else if (req.url === '/youtube') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello youtube')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('This route does not exist please use correct endpoint.')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
})