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

async function DeleteBook(){

    await  Book.deleteMany({});

    console.log('All documents deleted.');
 
}
    const books_Data = [
        { "book": "Civilization ", "author": "Tzu", "year ": "1952" },
        { "book": "Urbanization ", "author": "Richards ", "year": "1975" },
        { "book": "Concuring the  World", "author": "Alexander", "year": "1032" },
      ];

async function AddBooks() {
    await Book.insertMany(books_Data);
}

async function RunDatabase() {

  await DeleteBook();

  await AddBooks();

  console.log("Data entered")

  mongoose.disconnect(); 
}

RunDatabase();