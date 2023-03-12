const empModel = require("../model/employee")


exports.addEmployee =async(req, res, next) =>{
    const emp = req.body;
    try{
        const newEmp = empModel(emp)
        await newEmp.save();
        res.json({
            ok:true, 
            message:"ADD",
            empId:newEmp._id,
        })
    }catch(e){
        res.status(500).json({
            ok:false,
            message:"Failed"
        })
    }
    
}

exports.getEmployee= async(req,res, next)=>{
    try{
        const emp = await empModel.findOne({_id:req.params.id}, {
            name:1,_id:0
        })
        res.json({
            ok:true, 
            data: emp,
        })

    }catch(e){
        res.status(500).json({
            ok:false,
            message:"Failed"
        })
    }
}

exports.deleteEmployee =async(req, res, next)=>{
    try{const delteCount = await empModel.deleteOne({_id:req.params.id})
        res.json({
            ok:true, 
            deletedCount: delteCount,
        })

    }catch(e){
        res.status(500).json({
            ok:false,
            message:"Failed"
        })
    }
}

exports.editEmployee =async (req, res, next)=>{
    try{
    const emp = await empModel.findOne({_id:req.params.id})
    emp.name = req.body.name
    await emp.save()
    res.json({
        ok:true, 
        data: emp,
    })

}catch(e){
    res.status(500).json({
        ok:false,
        message:e.message
    })
}
}