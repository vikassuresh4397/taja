const mongoose = require("mongoose");
const specialization= ["Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"];
const PostSchema = mongoose.Schema(
  {
    username: String,
    title: String,
    content: String,
    category: String,
    date: Date,
    likes: Number,
    comments: [
      {
        username: String,
        content: String,
      },
    ],
    
    user: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("appointments", PostSchema);
module.exports = {
  PostModel,
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGUyZjRlOGYyN2I1NjdlZWZkMjUwMTQiLCJ1c2VyIjoidmlrYXMgc3VyciIsImlhdCI6MTY5MjU5NTU5MX0.OD7EukKI3ozG-TyPn5i9yE0NHuL8-dDhqYTgRHij6BQ
