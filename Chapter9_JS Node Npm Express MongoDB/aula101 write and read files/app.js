const path = require('path');
const fileDir = path.resolve(__dirname, '.', 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');


// const persons = [
//     {name: 'Joao'},
//     {name: 'Vitor'},
//     {name: 'Maria'},
//     {name: 'Tiago'},
//     {name: 'José'},
// ]

// const json = JSON.stringify(persons, '', 2);

// write(fileDir, json);

async function readfile(dir){
    const data = await read(dir); 
    logData(data)
}

function logData(data){
    data = JSON.parse(data);
    data.forEach(element => {
        const name = element.name
        console.log(name)
    });

}

readfile(fileDir)
    


