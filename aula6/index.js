/*
    - We cannot create variables with reserved words
    - Variables need to have important names
    - You cannot start a variable name with a number
    - Cannot contain spaces or dashes
    - We use camelCase
    - Upper and lowercase
    - Case-sensitive
    - We cannot redeclare variables with let
    - DO NOT USE VAR, USE LET.
*/

let clientName; //declare variable
clientName = 'Vitor'; //inicialize variable
console.log(clientName, 'was born in 2002');
clientName = 'Tiago';
console.log(clientName, 'was born in 2002');
