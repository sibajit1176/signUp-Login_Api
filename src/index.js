const express=require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();
const cors=require("cors");

const mongoose=require("mongoose")

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors());

app.use("/users",userRouter);
app.use("/notes",noteRouter);


app.get("/",(req,res) =>{
    res.render("index");
})
app.use("",require("../src/routes/userRoutes"));
app.use("",require("../src/routes/noteRoutes"));
const PORT=process.env.PORT || 5000;
app.set("view engine","ejs");
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,(error) =>{
        if(error) throw error;
        console.log("server started on port on." +PORT);
    })
})
.catch((error)=>{
console.log(error);
})
