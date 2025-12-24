const requestLogger = (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log(new Date);
    next()
}

const jsonBodyGuard = (req, res, next) => {
    if ((req.method === "POST" || req.method === "PUT" || req.method === "PATCH") && !req.body) {
        res.sentStatus(400)        
    }
    else next()
}

const errorHandler = (req, res, next) => {
}

export {
    requestLogger,
    jsonBodyGuard
}