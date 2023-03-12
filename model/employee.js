const mongoose = require("mongoose");


const EmployeeSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.String,
        required:true,
    },
    phone:{
        type:mongoose.Schema.Types.String
    }
})


module.exports = mongoose.model("employee", EmployeeSchema); 

