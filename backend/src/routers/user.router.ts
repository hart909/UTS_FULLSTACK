import { Router } from "express";
import { sample_users } from "../data";
import jwt from 'jsonwebtoken'
const router = Router()
router.post("/login", (req , res)=>{
    const body = req.body;
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === body.email && 
        user.password === body.password);
        if(user){
            res.send(generateTokenResponse(user))
        }
        else{
            const BAD_REQUEST = 400
            res.status(BAD_REQUEST).send("Username or Password invalid")
        }
})
const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"Here The Text",{
        expiresIn:"30d"
    });
    user.token = token;
    return user;
}

export default router;