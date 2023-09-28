const express = require("express");
const { PostModel } = require("../model/post.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PostRouter = express.Router();
const { auth } = require("../middleware/auth.middleware");


PostRouter.post("/appointments", auth, async (req, res) => {
  try {
    const note = new PostModel(req.body);
    await note.save();
    res.json({ msg: "New note has been added", note: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

PostRouter.get("/", auth, async (req, res) => {
  try {
    const notes = await PostModel.find({ userID: req.body.userID });

    res.json(notes);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//http://localhost:7080/appointments/update/64e34764b7198fee49b2290c
PostRouter.patch("/update/:noteID", auth, async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const notes = await PostModel.findOne({ _id: noteID });
    const userIDinNoteDoc = notes.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await PostModel.findByIdAndUpdate({ _id: noteID }, req.body);
      res.json({ msg: `{note.title} has been updated` });
    } else {
      res.json({ msg: "Not Authorized" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});
//http://localhost:7080/appointments/delete/64e34bb8882c84f40c5ad628
PostRouter.delete("/delete/:noteID", auth, async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const notes = await PostModel.findOne({ _id: noteID });
    const userIDinNoteDoc = notes.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await PostModel.findByIdAndDelete({ _id: noteID });
      res.json({ msg: `{note.title} has been deleted` });
    } else {
      res.json({ msg: "Not Authorized" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

// http://localhost:7080/appointments/filter/specialization?specialization=Dermatologist
PostRouter.get("/filter/specialization", auth, async (req, res) => {
  try {
    const { specialization } = req.query;
    const notes = await PostModel.find({ userID: req.body.userID, specialization });
    res.json(notes);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// http://localhost:7080/appointments/filter/name?name=Vikas%20Suresh
PostRouter.get("/filter/name", auth, async (req, res) => {
  try {
    const { name } = req.query;
    const notes = await PostModel.find({ userID: req.body.userID, name });
    res.json(notes);
  } catch (err) {
    res.json({ error: err.message });
  }
});








module.exports = { PostRouter };
