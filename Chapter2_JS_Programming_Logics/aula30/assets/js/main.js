// function getDayOfTheWeek(dayOfTheWeek) {
//     let dayOfTheWeekText;
//     switch (dayOfTheWeek) {
//         case 0:
//             dayOfTheWeekText = 'Sunday';
//             break;
//         case 1:
//             dayOfTheWeekText = 'Monday';
//             break;
//         case 2:
//             dayOfTheWeekText = 'Tuesday';
//             break;
//         case 3:
//             dayOfTheWeekText = 'Wednesday';
//             break;
//         case 4:
//             dayOfTheWeekText = 'Thursday';
//             break;
//         case 5:
//             dayOfTheWeekText = 'Friday';
//             break;
//         case 6:
//             dayOfTheWeekText = 'Saturday';
//             break;
//         default:
//             dayOfTheWeekText = '';
//             break;
//     }
//     return dayOfTheWeekText;
// }

// function getMonthName(month) {
//     let monthText;
//     switch (month) {
//         case 0:
//             monthText = 'January';
//             break;
//         case 1:
//             monthText = 'February';
//             break;
//         case 2:
//             monthText = 'March';
//             break;
//         case 3:
//             monthText = 'April';
//             break;
//         case 4:
//             monthText = 'May';
//             break;
//         case 5:
//             monthText = 'June';
//             break;
//         case 6:
//             monthText = 'July';
//             break;
//         case 7:
//             monthText = 'August';
//             break;
//         case 8:
//             monthText = 'September';
//             break;
//         case 9:
//             monthText = 'October';
//             break;
//         case 10:
//             monthText = 'November';
//             break;
//         case 11:
//             monthText = 'December';
//             break;
//         default:
//             monthText = '';
//             break;
//     }
//     return monthText;
// }

//-----------------------------------------------------

function getDayOfTheWeek(dayOfTheWeek) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayOfTheWeek];
}

function getMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
}

function addLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}

function createDate(date) {

    const day = date.getDay();
    const month = date.getMonth() + 1;
    const numDay = date.getDate();
    const year = date.getFullYear();
    const hour = addLeadingZero(date.getHours());
    const min = addLeadingZero(date.getMinutes());

    const nameDay = getDayOfTheWeek(day);
    const nameMonth = getMonthName(month);

    const formattedDate = `${nameDay}, ${numDay} of ${nameMonth} ${year} ${hour}:${min}`

    return formattedDate;
}

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = createDate(date);

// ---------------------------------------------------------
// const h1 = document.querySelector('.container h1');
// const date = new Date();

// const options = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }

// h1.innerHTML = date.toLocaleString('pt-PT', options);

