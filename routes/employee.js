const express = require("express");
const empCont = require("../controller/employee")

module.exports = express.Router()
    .get("/:id", empCont.getEmployee)
    .post("/", empCont.addEmployee)
    .delete("/:id", empCont.deleteEmployee)
    .put("/:id", empCont.editEmployee)



