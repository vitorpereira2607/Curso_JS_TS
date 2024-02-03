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
function ValidateCPF(sendCPF) {
    Object.defineProperty(this, 'clearCPF', {
        get: function () {
            return sendCPF.replace(/\D+/g, '');
        }
    })
}

ValidateCPF.prototype.validate = function () {
    if (typeof this.clearCPF === 'undefined') return false;
    if (this.clearCPF.length !== 11) return false;
    if (this.isSequence()) return false;

    const parcialCPF = this.clearCPF.slice(0, -2);
    const firstDigit = this.createDigit(parcialCPF);
    const secondDigit = this.createDigit(parcialCPF + firstDigit);
    console.log(firstDigit);
    console.log(secondDigit);

    const newCPF = parcialCPF + firstDigit + secondDigit;
    console.log(newCPF);
    return newCPF === this.clearCPF;
}

ValidateCPF.prototype.createDigit = function (parcialCPF) {
    const cpfArray = Array.from(parcialCPF);
    let countdown = parcialCPF.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        
        ac += (Number(val) * countdown);
        console.log(val, countdown, ac);
        countdown--;
        return ac;
    }, 0)

    const digit = 11 - (total % 11)

    return digit > 9 ? '0' : String(digit);
}

ValidateCPF.prototype.isSequence = function () {
    const sequence = this.clearCPF[0].repeat(this.clearCPF.length);
    return sequence === this.clearCPF;
}

const cpf = new ValidateCPF('705.484.450-52');

if (cpf.validate()) {
    console.log('Valid CPF');
} else {
    console.log('Invalid CPF');
}