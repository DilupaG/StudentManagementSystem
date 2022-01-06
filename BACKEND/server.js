//import dependicies 
const express = require("express"); //framework
const mongoose = require("mongoose"); //mongodb
const bodyParser = require("body-parser"); 
const cors = require("cors");
const app = express(); //assinged express variable  to another variable
require("dotenv").config();

//if 8070 is not available, assign a free prot to our app
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json()); //get the json format from bodypaser

//get the mongoDB url from .env file
const URL = process.env.MONGODB_URL;

//create a connection with mongodb
mongoose.connect(URL);

//open a created connection
const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb connection success!");
})

//for accessing route,students.js 
const studentRouter = require("./routes/students.js")

//call students route file useing express. 1st parameter eka /oonaamak
app.use("/student",studentRouter);

//run on the port
app.listen(PORT, ()=>{

    console.log(`Server is up and running on port : ${PORT}`)

})



