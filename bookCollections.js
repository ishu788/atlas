const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/bookDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true


});

const book_Schema = new mongoose.Schema({

    book: String,
    author: String,
    year: String,

  });
  

  const Book = mongoose.model('Book', book_Schema);
  

  async function ReadBook() {
   
      const books = await Book.find({});

      console.log(books);

      mongoose.disconnect(); 
  }

  ReadBook();