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

async function updateTheBook() {
   
      const updatedBook = await Book.findOneAndUpdate(

        { book: 'Urbanization_' },
        { year: '1999' },
        { new: true }
      );
      console.log('Updated book :');
      console.log(updatedBook);
    
      mongoose.disconnect(); 
    
  }
  
  updateTheBook();