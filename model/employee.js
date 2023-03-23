const mongoose = require("mongoose");




const EmpSchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    name:{
        type: mongoose.Schema.Types.String,
        required: true, unique:true, 
    },
    age:{
        type:mongoose.Schema.Types.Number,
        required: true,
    },
    phone:{
        type: mongoose.Schema.Types.String,
        required: true,
    },
    password:{
        type: mongoose.Schema.Types.String,
        required: true,
    }
});


module.exports = mongoose.model("employee", EmpSchema)

