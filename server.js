import http from 'http';
const PORT = 3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404;
    console.log(req.url)
    console.log(req.method)
    res.write('<h1>Send IT</h1>')
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})