/*
    Ternary Operations
        ?
        : 
        (condition)       ? 'Value when true' : 'Value when false';
        if (userScore >= 1000){console.log('User VIP')} else {console.log('Normal VIP')}
         userScore >= 100 ? 'User VIP' : 'Normal VIP';
*/

const userScore = 999;
const userLevel = userScore >= 100 ? 'User VIP' : 'Normal VIP';

if (userScore >= 1000){
    console.log('User VIP');
} else{
    console.log('Normal VIP');
}

console.log(userLevel);