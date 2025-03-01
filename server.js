import http from 'http';
const PORT = 3000;
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
 
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname)

const server = http.createServer(async(req,res) => {

    try{
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                // res.setHeader('Content-Type', 'text/html')
                // res.statusCode = 404;
                // console.log(req.url)
                // console.log(req.method)
                // res.write('<h1>Send IT</h1>')
                // res.end()   

                filePath = path.join(__dirname, 'public', 'index.html')
            }else if(req.url === '/about'){
                // res.setHeader('Content-Type', 'text/html')
                // res.statusCode = 200;
                // res.write('<h1>About Us</h1>')
                // res.end()

                filePath = path.join(__dirname, 'public', 'about.html')
            }else{
                // res.setHeader('Content-Type', 'text/html')
                // res.statusCode = 404;
                // res.write('<h1>Page Not Found</h1>')
                // res.end()

                throw new Error ('Page not found')
            }
            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        }else{
            throw new Error('Method not allowed')
        }
    }catch(err){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Server Error</h1>')
        res.statusCode = 500;

    }
   
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})