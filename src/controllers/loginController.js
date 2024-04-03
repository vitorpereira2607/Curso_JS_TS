const Login = require('../models/LoginModel');

exports.loginIndex = (req, res) => {
    res.render('login/index');
    return;
}

exports.registerIndex = (req, res) => {
    res.render('register/index');
    return;
}

exports.logged = (req, res) => {
    res.render('login/logged');
    return;
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                res.redirect('/register/index');
            });
            return;
        }

        req.flash('success', 'Conta criada com sucesso!');
        req.session.save(() => {
            res.redirect('/login/index');
        });

    } catch (error) {
        console.error(error)
        return res.render('error')
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Login efetuado com sucesso.');
        req.session.user = login.user;
        req.session.save(() => {
            res.redirect('/logged');
        });

    } catch (error) {
        console.error(error)
        return res.render('error')
    }
}

exports.logout = (req, res) => {
    if(req.session){
        req.session.destroy(err => {
            console.error('Error destroying session: ', err);
        });
        res.redirect('/');
    }
    else {
        res.redirect('/login/index')
    }
}