export default class ValidateCPF {
    constructor(sendCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sendCPF.replace(/\D+/g, '')
        });
    }

    isSequence() {
        const sequence = this.cleanCPF.charAt(0).repeat(11)
        return sequence === this.cleanCPF
    }

    validateCPF() {
        if (!this.cleanCPF) return false;
        if (typeof this.cleanCPF !== 'string') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequence()) return false;
        this.createNewCPF();

        return this.newCPF === this.cleanCPF;

    }

    createNewCPF() {
        const parcialCPF = this.cleanCPF.slice(0, -2);
        const digit1 = ValidateCPF.createDigit(parcialCPF);
        const digit2 = ValidateCPF.createDigit(parcialCPF + digit1);

        this.newCPF = parcialCPF + digit1 + digit2
    }

    static createDigit(parcialCPF) {
        let total = 0;
        let countdown = parcialCPF.length + 1;

        for (let numericString of parcialCPF) {
            total += countdown * Number(numericString);
            countdown--;
        }

        const digit = 11 - (total % 11);

        console.log(digit)

        return digit > 9 ? '0' : String(digit)
    }
}
