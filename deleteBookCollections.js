const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/bookDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const bookSchema = new mongoose.Schema({

  book: String,
  author: String,
  year: String,

});

const Book = mongoose.model('Book', bookSchema);

async function deleteBooksByAuthor(author) {
 
    const result = await Book.deleteMany({ author });

    console.log(`Deleted ${result.deletedCount} books with the author "${author}"`);



  mongoose.disconnect();

}

deleteBooksByAuthor('Tzu');