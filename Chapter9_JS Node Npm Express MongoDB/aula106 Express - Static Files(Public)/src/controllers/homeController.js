exports.homePage = (req, res) => {
    res.render('index');
}

exports.postForm = (req, res) => {
    const { name, surname , age} = req.body;
    res.send(`${name} ${surname} is ${age} years old`);
}