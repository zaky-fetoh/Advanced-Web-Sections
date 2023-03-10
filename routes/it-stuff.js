const express = require("express");
const itStuff = require("../controller/it-stuff");

module.exports = express.Router()
    .get("/", itStuff.getItStuff)
    .post("/", itStuff.addItStuff)
    .delete("/", itStuff.deleteItStuff)
    .put("/", itStuff.editItStuff)



