const express = require("express");
const NoticeRouter = express.Router();
const NoticeController = require("../Controllers/Notice");

// Add Notice

NoticeRouter.post("/addnotice", NoticeController.add_notice);

NoticeRouter.get("/getallnotice", NoticeController.getAll_notice);

NoticeRouter.delete("/notice/delete/:id", NoticeController.delete_notice);

NoticeRouter.get("/notice/get/:id", NoticeController.get_notice);

NoticeRouter.put("/notice/update/:id", NoticeController.update_notice);

module.exports = NoticeRouter;
