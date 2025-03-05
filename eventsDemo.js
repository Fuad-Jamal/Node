import {EventEmitter} from 'events';

const myEmit = new EventEmitter();

function greet(name) {
    console.log('Hello, ' + name);
}

function bye(name) {
    console.log('Goodbye, ' + name);
}

myEmit.on('heey', greet)
myEmit.on('gudbye', bye)

myEmit.emit('heey', 'Alexa')
myEmit.emit('gudbye', 'Alexa')

myEmit.on('error', (err) =>{
     console.log('there was an error', err)
})

myEmit.emit('error', new Error('whoops'))