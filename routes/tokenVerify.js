const dotenv = require("dotenv");
const jwt=require("jsonwebtoken")
const { User }=require('../models/user');
const router = require("express").Router();


dotenv.config();
const privateKey=process.env.JWTPRIVATEKEY;


router.get("/", async (req,res) => {
    try {
        console.log(privateKey, 'privateKey')
        const tokenVal = req.headers.authorization; // Token should be in "Bearer <token>" format
        console.log(tokenVal, 'tokenVal')
        const token = tokenVal.split(" ")[1]; // Extract token value
        console.log(token, 'token')
        const decoded=jwt.verify(token,privateKey);
        console.log(decoded, 'decoded')
        const userId = decoded._id;
        const user= await User.findById(userId);
        console.log(user);
        if(!user){
            console.log("user doesn't exist");
        }
        else {
            console.log('data : user', user)
            res.send(user);
            return;
        }
    } catch (e) {
        res.status(500).send({messsage:"Internal server error"});
    }
})

module.exports =router;
