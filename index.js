const express = require("express");
const morgan = require("morgan");
require("dotenv").config()


const mongoose = require("mongoose");
mongoose.pluralize(null)

const empRoutes = require("./routes/employee");
const itStuffRoutes = require("./routes/it-stuff");

const empModel = require("./model/employee")
const itStuff = require("./model/it-stuff")

const DB_URI = process.env.DB_URI;

const PORT = process.env.PORT;
(async()=>{

try{
await mongoose.connect(DB_URI);
console.log("DB Connected Sucess")
}catch(e){
    console.log(e.message);
    process.exit(4);
}
const app = express()
    .use(express.json())
    .use(morgan("combined"))
    .use("/employee", empRoutes)
    .use("/it-stuff", itStuffRoutes)



const ser = app.listen(PORT, () => {
    console.log("Server is listening at :", ser.address().port);
})})()
