exports.homePage = (req, res) => {
    res.render('index');
    return;
}

exports.postForm = (req, res) => {
    const { name, surname , age} = req.body;
    res.send(`${name} ${surname} is ${age} years old`);
}