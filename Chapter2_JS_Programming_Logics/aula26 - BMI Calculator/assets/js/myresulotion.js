const form = document.querySelector('.form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resBMI = document.querySelector('.res');

function calculateBMI(){
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);
    const p = document.createElement('p');
    const BMI = weight / (height * height);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += 'Invalid input. Please enter valid weight and height.';
        resBMI.appendChild(p);
    }else if (BMI < 18.5 ) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Underweight)</p>`;
        resBMI.appendChild(p);
    } 
    else if (BMI >= 18.5 && BMI <= 24.9) {
        resBMI.innerHTML = "";
        p.classList.add('good');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Normal weight)`;
        resBMI.appendChild(p);
    }
    else if (BMI >= 25.5 && BMI <= 29.9) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Overweight)`;
        resBMI.appendChild(p);
    }
    else if (BMI >= 30 && BMI <= 34.9) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Obesity level 1)`;
        resBMI.appendChild(p);
    }
    else if (BMI >= 35 && BMI <= 39.9) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Obesity level 2)`;
        resBMI.appendChild(p);
    }
    else if (BMI >= 40) {
        resBMI.innerHTML = "";
        p.classList.add('bad');
        p.innerHTML += `BMI is ${BMI.toFixed(2)}(Obesity level 3)`;
        resBMI.appendChild(p);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateBMI();   
});



