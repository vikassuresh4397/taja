const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishing_year: {
    type: Number,
    required: true,
  },
},{
  versionKey:false,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
