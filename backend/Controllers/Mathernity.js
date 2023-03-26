const MathernityModel = require("../Models/MathernityModel");

// Save Contacts
const save_mathernity = function (req, res){
    let newmother = new MathernityModel(req.body);

    newmother.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true
        });
    });
}

const getAll_mathernity = function (req, res){
    MathernityModel.find().exec((err, exsitingMothers) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingMothers,
        });
      });
}

const delete_mathernity = function (req, res){
    MathernityModel.findByIdAndRemove(req.params.id).exec((err,deletedmother)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedmother
        });

    });
}

// Get Contacts By ID
const get_mathernity = function (req, res){
    let motherID = req.params.id;

    MathernityModel.findById(motherID,(err,exsitingMothers)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingMothers
        });
    });
}

// Update Contacts
const update_mathernity = function (req, res){
    MathernityModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, mother)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

module.exports = {save_mathernity, getAll_mathernity, delete_mathernity, update_mathernity, get_mathernity};