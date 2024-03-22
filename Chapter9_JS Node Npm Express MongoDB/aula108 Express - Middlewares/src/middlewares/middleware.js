exports.globalMiddleware = (req, res, next) => {
    console.log();
    if(req.body.name){
        console.log(`I know what you post: ${req.body.name}`);
        console.log();
    }
    
    next();
}