const express = require("express");
const empCont = require("../controller/employee")

module.exports = express.Router()
.post("/signIn", empCont.signIn)
.get("/:id", empCont.getEmployee)
    .post("/", empCont.addEmployee)
    .delete("/:id", empCont.deleteEmployee)
    .put("/", empCont.editEmployee)



