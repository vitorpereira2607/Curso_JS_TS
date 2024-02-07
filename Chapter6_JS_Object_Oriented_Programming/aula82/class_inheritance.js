class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.start = false;
    }

    startDevice() {
        if (this.start) {
            console.log('Device already started.');
            return;
        }

        this.start = true;
    }

    turnOff() {
        if (!this.start) {
            console.log('Device already turned Off');
            return;
        }

        this.start = false;
    }
}

class Smartphone extends EletronicDevice {
    constructor(name, model, color){
        super(name);
        this.model = model;
        this.color = color;
    }

    startDevice(){
        console.log('Changing startDevice method'); // Polyphormism
    }

    addMethod(){
        console.log('Adding distinct method from the super class to Smartphone class');
    }
}

const s1 = new Smartphone('Iphone', '13 Pro', 'Black');

console.log(s1); 
/* 
Output: 
Smartphone {
    name: 'Iphone',
    start: false,
    model: '13 Pro',
    color: 'Black'
  }
  */ 
s1.startDevice();
s1.turnOff(); // Ability to access the methods from the main class