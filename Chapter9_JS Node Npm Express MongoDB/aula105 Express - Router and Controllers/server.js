const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Start the server
app.listen(3000, () => {
    console.log('Access port: http://localhost:3000');
    console.log('Server running on port: 3000');
});
