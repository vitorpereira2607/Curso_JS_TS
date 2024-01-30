//Factory function
function createPerson(name, surname, w, h){
    return {
        name,
        surname,

        // Getter
        get fullName(){
            return `${this.name} ${this.surname}.`
        },

        // Setter
        set fullName(value){
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join(' ');
        },

        write: function(subject){
            return `${this.name} is ${subject}.`;
        },

        weight: w,
        height: h,
        // Getter
        get bmi(){
            bmi = this.weight / (this.height * this.height)
            return bmi.toFixed(2);
        }
        
    };
}

const p1 = createPerson('Vitor', 'Pereira', 80, 1.75);

// Setter is being used here
p1.fullName = 'José Osvaldo'
const p2 = createPerson('Tiago', 'Faria', 75, 1.72);
const p1BMI = p1.bmi;

console.log(p1.fullName);
console.log(p1.write('talking about JS'));
console.log(p2.write('talking about JS'));
console.log(p1BMI);
