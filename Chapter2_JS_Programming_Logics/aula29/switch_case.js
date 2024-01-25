function getDayOfTheWeek(dayOfTheWeek){
    let dayOfTheWeekText;
    switch(dayOfTheWeek){
        case 0:
            dayOfTheWeekText = 'Sunday';
            break;
        case 1:
            dayOfTheWeekText = 'Monday';
            break;
        case 2:
            dayOfTheWeekText = 'Tuesday';
            break;
        case 3:
            dayOfTheWeekText = 'Wednesday';
            break;
        case 4:
            dayOfTheWeekText = 'Thursday';
            break;
        case 5:
            dayOfTheWeekText = 'Friday';
            break;
        case 6:
            dayOfTheWeekText = 'Saturday';
            break;
        default:
            dayOfTheWeekText = '';
            break; 
    }
    return dayOfTheWeekText;
}



console.log(getDayOfTheWeek(dayOfTheWeek));
