const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRouter = require('./routes/users');

const app = express();

const cors = require('cors');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

const quizsetRouter = require('./routes/quizsets'); 
app.use('/api/quizsets', quizsetRouter);


dotenv.config();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
