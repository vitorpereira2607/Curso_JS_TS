exports.homePage = (req, res) => {
    //console.log(req.session.user)
    // req.flash('info', 'Hello World');
    // req.flash('error', 'Error');
    // req.flash('success', 'Success');
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
}

exports.postForm = (req, res) => {
    const { name, surname, age } = req.body;
    res.send(`${name} ${surname} is ${age} years old`);
}