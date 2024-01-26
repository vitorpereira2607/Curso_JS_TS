let i = 0;

const fruits = ['apple', 'orange', 'banana', 'grapes'];

while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){
    let rand = random(min, max);
    console.log(rand);
}

console.log('###########');

do{
    let rand = random(min, max);
    console.log(rand);
}while(rand !== 10);