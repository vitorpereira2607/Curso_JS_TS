function getHour(){
    // if(date && !(date instanceof Date)){ // Check if the variable 'date' is not an instance of the Date object
    //     throw TypeError('Invalid Date!');
    // } 

    // if (!date){
    //     date = new Date()
    // }
    let date = new Date();
    return date.toLocaleTimeString('pt-PT', {});
}

const timer = setInterval(function () {
    console.log(getHour())
}, 1000)

setTimeout( function () {
    console.log('Hello World!')
}, 1000 )
