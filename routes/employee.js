const express = require("express");
const empCont = require("../controller/employee")

module.exports = express.Router()
    .get("/", empCont.getEmployee)
    .post("/", empCont.addEmployee)
    .delete("/", empCont.deleteEmployee)
    .put("/", empCont.editEmployee)



