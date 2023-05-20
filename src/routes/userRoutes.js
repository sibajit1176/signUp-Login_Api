const express=require("express");
const { signup, signin } = require("../../controlers/UserControl");
const user = require("../models/user");
const userRouter=express.Router();

userRouter.post("/signup",signup);
userRouter.post("/signin",signin);
userRouter.get("/signup",(req,res)=>{
    res.render("signup");
})
userRouter.get("/signin",(req,res)=>{
    res.render("signin");
})


module.exports=userRouter;