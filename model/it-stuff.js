const mongoose = require("mongoose");




const EmpSchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    name:{
        type: mongoose.Schema.Types.String,
    },
    rule:{
        type:mongoose.Schema.Types.Number,
    },
    phone:{
        type: mongoose.Schema.Types.String,
    }
});


module.exports = mongoose.model("itStuff", EmpSchema)

