/*
    Write a function called eLand that receive a height and weight. Returns true if the image is in landscape mode
*/

function eLandscape(height, weight) {
    return height > weight ? true : false;
    //  OR
    //return height > weight 
}

//OR

const eLandscapeV2 = (height, weight) =>
    height > weight

console.log(eLandscape(1920, 1080))

console.log(eLandscapeV2(1920, 1080))