const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://phamduyluan102001:5JT9ePrnPN3cALqR@cluster0.zadflqw.mongodb.net/").then(()=>{
    console.log("DB connect");
})
app.use("/api/user", userRouter);
app.listen(5000, console.log("start"));