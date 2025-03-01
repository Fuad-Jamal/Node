import {createServer} from 'http'
const PORT = 4000

const users = [
    {id: 1, name: 'John Doe', age: 25},
    {id: 2, name: 'Jane Doe', age: 24}
]

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
