const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    return;
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                res.redirect('/login/index');
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