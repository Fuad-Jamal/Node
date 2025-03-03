import {createServer} from 'http'
const PORT = 4000

const users = [
    {id: 1, name: 'John Doe', age: 25},
    {id: 2, name: 'Jane Doe', age: 24}
]
const createUser = (req,res) => {
    let body = '';
    req.on('data', (chunk) =>{
        body += chunk.toString()
    })
    req.on('end', () =>{
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }else if(req.url.match(/\api\/users\/([0-9]+)/)&& req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify({id: 1, name: 'John Doe', age: 25}))
        res.end()
    }else if(req.url === '/api/users' && req.method === 'POST'){
        createUser(req,res)
    }else{
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 404;
        res.write('<h1>Route Not Found</h1>')
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
