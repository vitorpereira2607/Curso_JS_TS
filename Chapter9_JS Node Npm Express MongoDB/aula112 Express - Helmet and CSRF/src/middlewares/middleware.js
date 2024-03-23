exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is a local variable from middleware.'
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN' ){
        return res.render('./includes/error')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}