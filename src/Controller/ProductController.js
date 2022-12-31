
const ProductsModel = require("../Models/ProductsModel");
// C===== >>> Create


exports.CreateProduct=(req, res)=>{
    let reqBody = req.body
    ProductsModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"Create Data Fail",data:err})
        }else {
            res.status(200).json({status:"Create Data Success", data:data})}
    })
}

//R ==== ReadData

exports.ReadProducts=(req,res)=>{
    let query= {}
    let projection ="ProductName ProductCode Img UnitPrice Qty TotulPrice";

    ProductsModel.find(query, projection,(err, data)=>{
        if(err){
            res.status(400).json({status:"Dara Read Fail" , data:err})
        }else{
            res.status(200).json({status:"Data Read Success",data:data})
        }
    })
}

// U=== Update

exports.updateProduct= (req,res)=>{
    let id = req.params.id;
    let query = {_id:id};
    let reqBody = req.body

    ProductsModel.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Data Update Fail", data:err})
        }else {
            res.status(200).json({status:"data UpdataOne Success", data:data})
        }
    })
}

// D===Delete ------------

exports.deleteProduct=(req,res)=>{
    let id = req.params.id
    let query = {_id:id}

    ProductsModel.remove(query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Data delete Fail", data:"err"})
        }else{
            res.status(200).json({status:"data:Delete Success" , data:data})
        }
    })
}
