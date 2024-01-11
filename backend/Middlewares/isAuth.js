const jwt = require('jsonwebtoken')
const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const isAuthenticated = AsyncHandler(async (req, res, next)=>{
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
            console.log(req.headers.authorization)
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id)
        req.user = user;
        next();
    }catch(err){
        console.log(err)
        res.status(401)
        throw new Error("Not authorized, token failed")
    }

})

module.exports = isAuthenticated;