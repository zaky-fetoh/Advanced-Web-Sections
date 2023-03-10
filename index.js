const express = require("express");
const morgan = require("morgan");
require("dotenv").config()


const empRoutes = require("./routes/employee");
const itStuffRoutes = require("./routes/it-stuff");


const PORT = process.env.PORT 

const app = express()
.use(express.json())
    .use(morgan("combined"))
    .use("/employee",empRoutes)
    .use("/it-stuff",itStuffRoutes)



    const ser = app.listen(PORT, ()=>{
    console.log("Server is listening at :", ser.address().port);
})