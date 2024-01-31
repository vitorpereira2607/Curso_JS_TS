
// Where we are creating a recursive functing to establish the limit of a maximun number
// We can identify a recursive function when the function is being called within this same function
function recursive(max){
    //console.log(max); // Output: 0 to 10
    if(max >= 10) return;
    max++;
    console.log(max); // Output: 1 to 10
    recursive(max);
}

recursive(0);