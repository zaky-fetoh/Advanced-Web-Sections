const EmpModel=require("../model/employee")
const bcrypt = require( "bcrypt")
const jwt = require("jsonwebtoken")

exports.addEmployee =async(req, res, next) =>{
    try{
        const body= req.body;
        const plainPass = body.password;
        const hashPass = await bcrypt.hash(plainPass,
            12)
        const EmpDoc = EmpModel({...body,
                password:hashPass});
        await EmpDoc.save()
        res.status(200).json({
            ok:true, messag: "Employee Add",
            newEmpId: EmpDoc._id
        })
    }catch(e){
        res.status(500).json({
            ok:false, message:e.message,
        })
        
    }
}

exports.signIn = async(req,res, next)=>{
    try{
        const body = req.body //const {body}= req
        const emp = await EmpModel.findOne({
            name: body.name
        })
        const isValidPass = await bcrypt.compare(
            body.password, emp.password 
        )
        const token = jwt.sign({
            name:body.name, 
        },)

        if(isValidPass) res.json({
            ok:true, signed:true,
        });else res.json({
            ok:false, signed:false,
        })
    }catch(e){
        res.status(500).json({
            ok:false, message:e.message,
        })
    }
}





exports.getEmployee= async(req,res, next)=>{
    try{
        const doc = await EmpModel.findOne({
            _id: req.params.id
        }, {__v:0,_id:1})
        res.status(200).json({
            ok:true, message:"Success", 
            data:doc,
        })
        }catch(e){
            res.status(500).json({
                ok:false, message:e.message,
        })}
}

exports.deleteEmployee =async(req, res, next)=>{
    try{
        const doc = await EmpModel.deleteOne({
            _id: req.params.id

        })
        res.status(200).json({
            ok:true, message:"Success", 
            deletedCount:doc.deletedCount,
        })
        }catch(e){
            res.status(500).json({
                ok:false, message:e.message,
        })}
}

exports.editEmployee =async (req, res, next)=>{
    try{
        const doc = await EmpModel.findOne({
            _id: req.params.id
        })
        for(let x in req.body) doc[x] = req.body[x]
        await doc.save() 
        res.status(200).json({
            ok:true, message:"Success", 
            data:doc,
        })
        }catch(e){
            res.status(500).json({
                ok:false, message:e.message,
        })}
}