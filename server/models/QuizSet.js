const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  term: String,
  definition: String
});

const QuizSetSchema = new mongoose.Schema({
  _id: String,
  title: String,
  flashcards: [FlashcardSchema]
});

module.exports = mongoose.model('QuizSet', QuizSetSchema, 'quizsets');
