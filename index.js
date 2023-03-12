const express = require("express");
const morgan = require("morgan");
require("dotenv").config()

const mongoose = require("mongoose")

const empRoutes = require("./routes/employee");
const itStuffRoutes = require("./routes/it-stuff");

const DB_URI = process.env.DB_URI;

const PORT = process.env.PORT;


(async () => {

    try{
        await mongoose.connect(DB_URI);
        console.log("MONOGO Connected");
    }catch(e){
        console.log(e.message);
    }


    const app = express()
            .use(express.json())
            .use(morgan("combined"))
            .use("/employee", empRoutes)
            .use("/it-stuff", itStuffRoutes)



    const ser = app.listen(PORT, () => {
            console.log("Server is listening at :", ser.address().port);
        })
    })()