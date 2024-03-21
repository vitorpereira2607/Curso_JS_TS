const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET   PUT     DELETE

// http://mysite.com/ <- GET -> delivery page -> endpoint: /
// http://mysite.com/about <- GET -> delivery about page -> endpoint: /about
// http://mysite.com/contact <- GET -> delivery contact page -> endpoint: /contact

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" "name">
    <button>Send</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Form received')
})

app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.listen(3000, () => {
    console.log('Access port: http://localhost:3000')
    console.log('Server running on port: 3000')
});