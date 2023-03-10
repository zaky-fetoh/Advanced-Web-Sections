const express = require("express")
const morgan = require("morgan")

const PORT = 3000 

const app = express()
    .use(morgan("combined"))
    .get("/",(req, res)=>{
    res.json({
        hello: 'Ahmed'
    })})
    .get("/maklad", (req ,res)=>{
        res.status(200).json({
            name:"mohmed"
        })})
    .post("/moh", (req ,res)=>{
        res.json({
            p: req.most,
            type:"post"
        })
    })
    .get("/moh",(req, res)=>{
        res.json({
            type:"get"
        })
    })

    const ser = app.listen(PORT, ()=>{
    console.log("Server is listening at :", ser.address().port);
})