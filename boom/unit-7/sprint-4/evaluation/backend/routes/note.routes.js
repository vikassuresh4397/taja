const express = require("express");
const noteRouter = express.Router();
const { NoteModel } = require("../models/note.model");
const { auth } = require("../middleware/auth.middleware");
noteRouter.use(auth);
noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.json({ msg: "New note has been added", note: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// {
//     "first_name": "vipin",
//     "last_name": "suresh",
//     "employee_email": "vipinsuresh4397@gmail.com",
//     "department": "IT",
//     "salary": "10000"
//   }

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find({ userID: req.body.userID });

    res.json(notes);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// noteRouter.patch("/update/:noteID",(req,res)=>{

// })

// noteRouter.delete("/delete/:noteID",(req,res)=>{

// })

//http://localhost:3000/posts/update/6486e80d2847c7897401f823
noteRouter.patch("/update/:noteID", auth, async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const notes = await NoteModel.findOne({ _id: noteID });
    const userIDinNoteDoc = notes.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
      res.json({ msg: `{note.first_name} has been updated` });
    } else {
      res.json({ msg: "Not Authorized" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

//http://localhost:3000/posts/delete/6486e80d2847c7897401f823
noteRouter.delete("/delete/:noteID", auth, async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { noteID } = req.params;
  try {
    const notes = await NoteModel.findOne({ _id: noteID });
    const userIDinNoteDoc = notes.userID;
    if (userIDinUserDoc === userIDinNoteDoc) {
      await NoteModel.findByIdAndDelete({ _id: noteID });
      res.json({ msg: `{note.first_name} has been deleted` });
    } else {
      res.json({ msg: "Not Authorized" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = {
  noteRouter,
};
