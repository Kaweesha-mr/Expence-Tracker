const jwt = require('jsonwebtoken');

const authMiddleware = async (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: "Authorization header required"});
    }
    const token = authHeader.split(' ')[1]; // Assumes 'Bearer <token>' format

    if(!token){
        return res.status(401).json({message: "Token is invalid"});
    }

   try{
    const decode = jwt.verify(token, process.env.jwt_secret);
    req.user = decode;
    next();

   }
   catch(err){
    return res.status(401).json({message: "Token is invalid"});
   }

}


module.exports = authMiddleware;

