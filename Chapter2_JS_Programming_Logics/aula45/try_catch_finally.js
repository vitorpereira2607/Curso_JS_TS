// try {
//     console.log(a);
//     console.log('File opened');
//     console.log('Manipulated the file and it generated an error');
//     console.log('File closed');
// } catch (error) {
//     //executes when it catches an error
//     console.log('Handling the error')
// } finally {
//     console.log('FINALLY: im alwawys being executed.')
//     // its always executed
// }

function getHour(date){
    if(date && !(date instanceof Date)){ // Check if the variable 'date' is not an instance of the Date object
        throw TypeError('Invalid Date!');
    } 

    if (!date){
        date = new Date()
    }

    return date.toLocaleTimeString('pt-PT', {});
}

try{
    const date = new Date('01-01-2000 12:40:23')
    const hour = getHour(date);
    console.log(hour);

}catch(err){
    console.log(err);
} 
