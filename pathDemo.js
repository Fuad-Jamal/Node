import path from 'path';

const file = './dir1/dir2/text.txt'

console.log(path.basename(file))

console.log(path.extname(file))

console.log(path.parse(file))

__dirname
let files = (path.join(__dirname, 'dir1', 'dir2', 'text.txt'))
console.log(files)