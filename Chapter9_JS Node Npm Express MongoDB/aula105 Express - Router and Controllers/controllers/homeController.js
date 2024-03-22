exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Client Name: <input type="text" name="name"><br>
    Client Surname: <input type="text" name="surname"><br>
    Client Age: <input type="text" name="age"><br>
    <button>Send</button>
    </form>
    `);
}

exports.postForm = (req, res) => {
    const { name, surname , age} = req.body;
    res.send(`${name} ${surname} is ${age} years old`);
}