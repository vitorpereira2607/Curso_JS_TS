/*
    Write a function that receives 2 values ​​and returns the largest of them
*/

function getMaxValue(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    return n2;

    // return n1 > n2 ? n1 : n2
}

//OR
const getMaxNumber = (x, y) => x > y ? x : y;

console.log(getMaxValue(2, 5));
console.log(getMaxNumber(10, 5));

