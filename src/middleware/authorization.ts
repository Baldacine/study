
/*const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

exports.required = (req: Request , res : Response, next : NextFunction ) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode.usuario;
        next();
    } catch (error){
        return res.status(401).send({ mensagem: "Falha na autenticação"});
    }
}

exports.optional = (req: Request , res : Response, next : NextFunction ) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode.usuario;
        next();
    } catch (error){
       next();
    }
}*/