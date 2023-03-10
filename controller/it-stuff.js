exports.addItStuff =(req, res, next) =>{
    console.log("adding ItStuff")
    console.log(req.body);
    res.json({
        name: "geg",
    })
}

exports.getItStuff= (req,res, next)=>{
    const id = req.params.id;

    console.log(`getting ItStuff of id ${id}`)
}

exports.deleteItStuff =(req, res, next)=>{
    console.log("delting ItStuff")
}

exports.editItStuff = (req, res, next)=>{
    console.log("editing ItStuff")

}