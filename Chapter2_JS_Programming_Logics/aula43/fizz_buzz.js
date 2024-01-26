function isDivisible(number){
    
    if(typeof number !== 'number') return number;
    if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
    if(number % 3 === 0) return 'Fizz'
    if(number % 5 === 0)return 'Buzz'
    else return `${number} is not devible by 3 nor 5`;
}

for(let i = 0; i <= 100; i++){
console.log(i, isDivisible('dsa'))
}