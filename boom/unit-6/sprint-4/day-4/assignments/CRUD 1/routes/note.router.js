const express = require("express");
const { NoteModel } = require("../model/note.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const noteRouter = express.Router();
const {auth} =require("../middleware/auth.middleware");

noteRouter.post("/create",auth, async(req,res)=>{
    try{
        const note=new NoteModel(req.body);
        await note.save();
        res.json({msg:"New note has been added", note:req.body})
      }catch(err){
          res.json({error:err.message})
      }




})

noteRouter.get("/",auth,async(req,res)=>{
    try{
        const notes=await NoteModel.find({userID:req.body.userID});
        
        res.json(notes);
      }catch(err){
          res.json({error:err.message})
      }
})

noteRouter.patch("/update/:noteID",auth,(req,res)=>{
    try{

    }catch(err){
    }
})

noteRouter.delete("/delete/:noteID",auth,(req,res)=>{
    try{

    }catch(err){
    }
})

module.exports = { noteRouter };