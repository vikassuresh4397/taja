const express = require('express');
const auth = require('../middlewares/auth');
const {Book}=require("../models/Book")
const rateLimiter = require('../middlewares/rateLimiter');
require('dotenv').config();

const router = express.Router();


router.post('/add', async (req, res) => {
 

  try{
    const user=new Book(req.body);
    await user.save();
    const everydata=await Book.find();
    console.log(everydata); 
    
 
    res.status(200).json({ msg: 'Book added', addedBook: 'Details of the book just added' });
}catch(err){
  res.status(400).json({ error: error.message });
}
});


router.get('/', rateLimiter, async (req, res) => {
  try {
  

    res.status(200).json({ books: 'All books present in the database' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.patch('/update/:id', async (req, res) => {
  


  const {userId}=req.params;
  const payload=req.body;

  try{
  await Book.findByIdAndUpdate({_id:userId},payload);
  const everydata=await Book.find();
      console.log(everydata); 
      console.log("length",everydata.length);
      res.status(200).json({ msg: 'Book has been updated' });

  }catch(err){
    res.status(400).json({ error: error.message });
  }






});


router.delete('/delete/:id', async (req, res) => {
  const {userId}=req.params;
   

  try{
    await Book.findByIdAndDelete({_id:userId})
    res.status(200).json({ msg: 'Book has been deleted' });
    }catch(err){
      res.status(400).json({ error: error.message }); 
    }






});

module.exports = router;
