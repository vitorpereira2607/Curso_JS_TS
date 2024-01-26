// try {
//     console.log(sda)
// } catch (error) {
//     console.log(error)
// }

function sum(x, y){
    if (typeof x !== 'number'|| typeof y !== 'number'){
        throw new Error('x and y need to be a number')
    }

    return x + y;
}

try{
    console.log(sum(1,2))
    console.log(sum('1',2))
}catch(err){
    console.log(err)
}
