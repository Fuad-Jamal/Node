function randomNumbers (){
    return Math.floor(Math.random() * 100) + 1;
}

function temperature(celcius){
    return celcius * 9/5 + 32
}

module.exports = {
    randomNumbers,
    temperature,
}