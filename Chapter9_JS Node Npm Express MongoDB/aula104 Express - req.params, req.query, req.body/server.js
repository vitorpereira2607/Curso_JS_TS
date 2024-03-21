const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

// Route to display a form to input client name
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" name="name">
    Client Surname: <input type="text" name="surname">
    Client Age: <input type="text" name="age">
    <button>Send</button>
    </form>
    `);
});

// Route to test route parameters and query parameters
app.get('/test/:id?', (req, res) => {
    const params = req.params;
    console.log(req.query); // Example URL: http://localhost:3000/test/123/?name=vitor&surname=pereira&age=21
                            // Output: { name: 'vitor', surname: 'pereira', age: '21' }
    res.send(params);
});

// Route to handle form submission (POST request)
app.post('/', (req, res) => {
    const {name, surname, age} = req.body;
    console.log(req.body);
    res.send(`${name} ${surname} is ${age} years old.`); // the names here comes from the form atribbute "name" -> Client Name: <input type="text" name="name">
});


// Start the server
app.listen(3000, () => {
    console.log('Access port: http://localhost:3000');
    console.log('Server running on port: 3000');
});
