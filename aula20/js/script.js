function myScope() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const person = [];


    function eventForm(event) {
        event.preventDefault();

        const name = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const addPersonObject = { 
            name: name.value, 
            surname: surname.value, 
            weight: weight.value, 
            height: height.value 
        }

        //console.log(addPersonObject)
        person.push(addPersonObject)

        res.innerHTML += `<p>${name.value}, ${surname.value}, ${weight.value}, ${height.value}.</p>`
        console.log(person)
    }

    form.addEventListener('submit', eventForm);
}



myScope();