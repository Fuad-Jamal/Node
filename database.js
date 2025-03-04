import pkg from 'pg'
const {Client} = pkg

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    port: 5432,
    password: '44511',
    database: 'postgres'
})

client.connect()
client.query(`SELECT * FROM users`, (err, res) => {
    if (!err){
        console.log(res.rows)
    }else{
        console.log(err.message)
    }
    client.end
})