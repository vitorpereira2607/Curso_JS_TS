// It works similary like dafault from ES6 Modules
module.exports = class Animal{
    constructor(specie, name, age, color, sound){
        this.specie = specie;
        this.name = name;
        this.age = age;
        this.color = color;
        this.sound = sound;
    }

    soundByAnimal(){
        console.log(`${this.name} is ${this.sound}.`)
    }
}

const path = require('path');
console.log(path.resolve(__dirname, '..', 'aula98 Modules (Part1)')); // d:\Curso_JS_TS\Chapter9_JS Node Npm Express MongoDB\aula98 Modules (Part1)

console.log(__filename); // d:\Curso_JS_TS\Chapter9_JS Node Npm Express MongoDB\aula98 Modules (Part2)\mod.js
console.log(__dirname); // d:\Curso_JS_TS\Chapter9_JS Node Npm Express MongoDB\aula98 Modules (Part2)

