const mongoose = require("mongoose")


const ItSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.String,
    },
    phone:{
        type:mongoose.Schema.Types.String
    }, 
    itNum:{
        type:mongoose.Schema.Types.Number
    }
})




module.exports = mongoose.model("it-stuff", ItSchema); 

