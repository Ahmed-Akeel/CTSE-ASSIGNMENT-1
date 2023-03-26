const phiModel = require("../Models/phiModel");

// Save Patient
const save_phi = function (req, res){
    let newPatient = new phiModel(req.body);

    newPatient.save((err)=>{
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

const getAll_phi= function (req, res){
    phiModel.find().exec((err, exsistingPatients) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsistingPatients,
        });
      });
}

const delete_phi= function (req, res){
    phiModel.findByIdAndRemove(req.params.id).exec((err,deletedcontact)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedcontact
        });

    });
}

// Get patients By ID
const get_phi = function (req, res){
    let contactID = req.params.id;

    phiModel.findById(contactID,(err,exsistingPatients)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsistingPatients
        });
    });
}

// Update Patients
const update_phi = function (req, res){
    phiModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, contact)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

module.exports = {save_phi, getAll_phi, delete_phi, update_phi, get_phi};