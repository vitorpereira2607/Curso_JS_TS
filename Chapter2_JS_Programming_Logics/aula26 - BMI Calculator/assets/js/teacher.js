// First capture the event form
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const BMI = getBMI(weight, height);
    const bmiLevel = getBMILevel(BMI);

    if (!weight) {
        setResBMI('Invalid input. Please enter valid weight.', false);
        return;
    }

    if (!height) {
        setResBMI('Invalid input. Please enter valid height.', false);
        return;
    }

    setResBMI(`Your BMI is ${BMI.toFixed(2)} (${bmiLevel})`, true);

    //console.log(BMI.toFixed(2), bmiLevel)
})

function getBMI(weight, height) {
    return weight / (height * height)
}

function getBMILevel(bmi) {
    const level = ['Underweight', 'Normal weight', 'Overweight', 'Obesity level 1',
        'Obesity level 2', 'Obesity level 3'];
  if (bmi >= 40) return level[5];
    if (bmi >= 35) return level[4];
    if (bmi >= 30) return level[3];
    if (bmi >= 25) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
}
  
function setResBMI(msg, isValid) {
    const resBMI = document.querySelector('.res');
    const p = document.createElement('p');
    resBMI.innerHTML = '';

    if (isValid) {
        p.classList.add('good');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML += msg;
    resBMI.appendChild(p);
}