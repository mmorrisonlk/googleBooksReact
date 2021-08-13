const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: Object,
    title: Object,
    subtitle: Object,
    link: Object,
    authors: Object,
    description: Object,
    image: Object
  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;