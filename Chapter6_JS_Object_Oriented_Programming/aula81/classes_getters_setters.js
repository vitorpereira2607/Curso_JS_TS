// Define a private symbol for velocity
const _vel = Symbol('vel')

class Car {
    constructor(name){
        this.name = name;
        this[_vel] = 0; // Set the initial velocity using the private symbol
    }

    // Getter method for retrieving the velocity property
    get velocity(){
        return this[_vel]; // Return the value of the private velocity property
    }

    // Setter method for setting the velocity property
    set velocity(value){
        if(typeof value != 'number') return;
        if(value >= 100 || value <= 0) return;

        // Set the value of the private velocity property
        this[_vel] = value;
    }

    speedUp(){
        if(this[_vel] >= 100) return;
        this[_vel]++;
    }

    brake(){
        if(this[_vel] <= 0) return;
        this[_vel]--;
    }
}

const c1 = new Car('Fiat fumarento');

for(let i = 0; i <= 200; i++){
    c1.speedUp()
}

c1.velocity = 200; // Here we are SETTING the value

console.log(c1) // Car { name: 'Fiat fumarento', vel: 2000, [Symbol(vel)]: 100 }
console.log(c1.velocity) // Here we are GETTING the value