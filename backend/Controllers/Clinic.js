const ClinicModel = require("../Models/ClinicModel");

// Save Contacts
const save_clinic = function (req, res){
    let newcontact = new ClinicModel(req.body);

    newcontact.save((err)=>{
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

const getAll_clinic = function (req, res){
    ClinicModel.find().exec((err, exsitingContacts) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingContacts,
        });
      });
}

const delete_clinic = function (req, res){
    ClinicModel.findByIdAndRemove(req.params.id).exec((err,deletedcontact)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedcontact
        });

    });
}

// Get Contacts By ID
const get_clinic = function (req, res){
    let contactID = req.params.id;

    ClinicModel.findById(contactID,(err,exsitingContacts)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingContacts
        });
    });
}

// Update Contacts
const update_clinic = function (req, res){
    ClinicModel.findByIdAndUpdate(
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

module.exports = {save_clinic, getAll_clinic, delete_clinic, update_clinic, get_clinic};