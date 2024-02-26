 
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min );

const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumbers = () => String.fromCharCode(rand(48, 57));
const symbols = '!@#$%^&*()-_+={}[]|\\:;\'"<>,.?/';
const generateSymbols = () => symbols[rand(0, symbols.length)]

export default function generatePassword(quantity, upper, lower, numbers, symbols){
    const passwordArray = [];
    quantity = Number(quantity);

    for (let i = 0; i < quantity; i++){
        upper && passwordArray.push(generateUpperCase());
        lower && passwordArray.push(generateLowerCase());
        numbers && passwordArray.push(generateNumbers());
        symbols && passwordArray.push(generateSymbols());
    }

    return passwordArray.join('').slice(0, quantity);
}
