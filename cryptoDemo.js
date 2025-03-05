import crypto from 'crypto'

const hash = crypto.createHash('sha256')
hash.update('password1234')
console.log(hash.digest('hex'))

crypto.randomBytes(16, (err, buff) =>{
    if(err) throw err
    console.log(buff.toString('hex'))
})