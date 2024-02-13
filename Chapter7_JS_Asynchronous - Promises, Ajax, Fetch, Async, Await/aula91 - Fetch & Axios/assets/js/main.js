// fetch('persons.json')
//     .then(response => response.json())
//     .then(json => loadDataToPage(json))
//     .catch(err => console.error('Error fetching data:', err))

axios('persons.json')
    .then(response => loadDataToPage(response.data));

function loadDataToPage(json){
    const table = document.createElement('table');
    const content = document.querySelector('.content-section');
    const result = document.createElement('div');

    result.classList.add('result');

    for (let person of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.appendChild(td);
        

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }  
    result.appendChild(table)   
    content.appendChild(result)
}

