import multiple, { name as personName, surname, age, sum, Person } from './module1';
//OR 
//import * as importEverthing from './module1'

const p1 = new Person('Vitor', 'Pereira');

console.log(personName, surname, age);
console.log(sum(2,2)); // 4
console.log(multiple(5,5)); // 25

console.log(p1)