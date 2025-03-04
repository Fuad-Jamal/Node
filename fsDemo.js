// import fs from 'fs'
import { read, write } from 'fs'
import fs from 'fs/promises'

// fs.readFile('./text.txt', 'utf8', (err, data) =>{
//     if(err) throw err
//         console.log(data)
// })

// const data = fs.readFileSync('./texts.txt', 'utf8')
// console.log(data)

// fs.readFile('./text.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

const readFile = async () => {
    try{
        const data = await fs.readFile('./texts.txt', 'utf8')
        console.log(data)
    }catch(err){
        console.log(err)
    }
}


const writeFile = async () => {
    try{
        await fs.writeFile('./texts.txt', 'Shatta wale')
        console.log('there you have it')
    }catch (err){
        console.log(err)
    }
}

const apend = async () => {
    try{
        await fs.appendFile('./texts.txt', '\n this is the new line')
        console.log('new line added')
    }catch(err) {
        console.log(err)
    }
}

writeFile()
apend()
readFile()