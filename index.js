const express = require("express")
const morgan = require("morgan")

const empRoutes = require("./routes/employee");
const itStuffRoutes = require("./routes/it-stuff");


const PORT = 3000 

const app = express()
    .use(morgan("combined"))
    
    .use("/employee",empRoutes)


    .use("/it-stuff",itStuffRoutes)



    const ser = app.listen(PORT, ()=>{
    console.log("Server is listening at :", ser.address().port);
})