exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.onlyHttp = (req, res, next) => {
    if (!req.secure) {
        next();
    } else {
        res.redirect('http://' + req.headers.host + req.url);
    }
    next();
}


exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('./error')
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Necessita efetuar login.');
        return req.session.save(() => {
            res.redirect('/login/index');
        });
    }
    next();
}
