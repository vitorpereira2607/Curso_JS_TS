export const name = 'Vitor';
export const surname = 'Pereira';
export const age = 21;

export function sum(x, y){
    return x + y;
}

export class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

export default (x, y) => x * y;

//export { name, surname, age, sum }