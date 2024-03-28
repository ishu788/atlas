const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema({
  name: String,
  sid: String,
});


const Quiz = mongoose.model('Quiz', quizSchema);


function insertQuizData(name, sid) {
  
  const newQuiz = new Quiz({
    name: name,
    sid: sid,
  });
  return newQuiz.save();
}

module.exports = { Quiz, insertQuizData };
