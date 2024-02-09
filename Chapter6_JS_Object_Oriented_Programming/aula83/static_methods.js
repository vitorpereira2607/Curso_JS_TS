class RemoteControl {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Instance Method
    volumeUp(){
        this.volume++;
    }

    // Instance Method
    volumeDown(){
        this.volume--;
    }

    // Static Method - Refences to the class, cannot access the information inside of the instance
    static changeBattery(){
        console.log('Changing Baterry');
    }
}

const rc1 = new RemoteControl('Phillips');

for(let i = 0; i < 5; i++){
    rc1.volumeUp(); 
}

console.log(rc1);
//rc1.changeBattery(); Output: rc1.changeBattery is not a function
RemoteControl.changeBattery(); // Output: Changing Baterry