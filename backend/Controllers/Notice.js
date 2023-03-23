const NoticeModel = require("../Models/NoticeModel");

//Add Notice

const add_notice = function (req, res) {
  let newnotice = new NoticeModel(req.body);

  newnotice.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
    });
  });
};

// Get All Notices
const getAll_notice = function (req, res) {
  NoticeModel.find().exec((err, exsitingNotices) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      exsitingNotices,
    });
  });
};

// Delete Notices
const delete_notice = function (req, res) {
  NoticeModel.findByIdAndRemove(req.params.id).exec((err, deletednotice) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.json({
      success: true,
      deletednotice,
    });
  });
};

// Get Notice By ID
const get_notice = function (req, res) {
  let NoticeID = req.params.id;

  NoticeModel.findById(NoticeID, (err, exsitingNotices) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      exsitingNotices,
    });
  });
};

// Update Notices
const update_notice = function (req, res) {
  NoticeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, notice) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: true,
      });
    }
  );
};

module.exports = {
  add_notice,
  getAll_notice,
  delete_notice,
  get_notice,
  update_notice,
};
