// const date = new Date(0); 01/01/1970 Timestamp unix
// const threeHours = 60 * 60 * 3 * 1000;
// const oneDay = 60 * 60 * 24 * 1000;
// const date = new Date(0 + plusThreeHours - plusOneDay)

//                     y, m, d, h, M, s, ms
//const date = new Date(2024, 0, 22, 12, 30); // Mon Jan 22 2024 12:46:40 GMT+0000 (Hora padrão da Europa Ocidental)

//const date = new Date('2024-01-22 12:42:59.100');

// console.log('Day:', date.getDate()); // Day: 22
// console.log('Month:', date.getMonth()); // Day: 0 -> Months starts with 0
// console.log('Year:', date.getFullYear()); // Day: 2024
// console.log('Hour:', date.getHours()); // Day: 12
// console.log('Minute:', date.getMinutes()); // Day: 42
// console.log('Seconds:', date.getSeconds()); // Day: 59
// console.log('MS:', date.getMilliseconds()); // Day: 100
// console.log('Day of the Week:', date.getDay()); // Day: 1 -> 0 - Sunday; 1 - Monday
// console.log(date.toString());

//console.log(Date.now())

function addLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}

function formatDate(date) {
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = addLeadingZero(date.getHours());
    const min = addLeadingZero(date.getMinutes());
    const sec = addLeadingZero(date.getSeconds());
    
    const formattedDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

    return formattedDate;
}

const date = new Date()
const datePT = formatDate(date);

console.log(datePT) // 2024-1-22 13:3:12 without the addLeadingZero function

