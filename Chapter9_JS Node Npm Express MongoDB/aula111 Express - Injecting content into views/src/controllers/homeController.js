exports.homePage = (req, res) => {
    res.render('index', {
        title: 'This title comes from the controller',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        persons: 
        [{
            name: 'Vitor',
            surname: 'Pereira'
        },
        {
            name: 'João',
            surname: 'Macarrão'
        }]
    });
    return;
}

exports.postForm = (req, res) => {
    const { name, surname, age } = req.body;
    res.send(`${name} ${surname} is ${age} years old`);
}