// 705.484.450-52 
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5
If number is higher than 9, consider 0
7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  = 28 4

11 - (284 % 11) = 2
If number is higher than 9, consider 0
*/

function validateCPF(cpf) {

    const clearCPF = cpf.replace(/\D+/g, '');

    const parcialCPF = clearCPF.slice(0, -2); // [ '7', '0', '5', '4', '8', '4', '4', '5', '0' ]

    if (clearCPF === 'undefined') return false;

    const firstDigit = createCPF(parcialCPF);
    const secondDigit = createCPF(parcialCPF.concat(firstDigit));

    const newCPF = parcialCPF + firstDigit + secondDigit;

    return newCPF === clearCPF;
}


function createCPF(parcialCPF) {
    let total = 0;
    const arrayCPF = Array.from(parcialCPF); // [ '7', '0', '5', '4', '8', '4', '4', '5', '0', '5', '2' ]

    let countdown = arrayCPF.length + 1;

    for (let i = 0; i < arrayCPF.length; i++) {
        let value = Number(arrayCPF[i]);
        total += value * countdown;

        console.log(value, countdown, total);
        countdown--;
    }

    const validateCPF = 11 - (total % 11);

    return validateCPF > 9 ? '0' : String(validateCPF);
}

const cpf = '705.484.450-52';
console.log(validateCPF(cpf));

//console.log(countdown)