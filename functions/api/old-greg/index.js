const express = require('express');
const Joi = require('joi');
const router = express.Router();

const quiz = require('./old-greg.json');

router.get('/quiz', (req, res) => {
  res.status(200).json(quiz);
});

router.get('/validate', (req, res) => {

  const id = parseInt(req.query.id);
  const answer = req.query.answer; 

  const { error } = validate(req.query);
  const question = quiz.find(c => c.id === parseInt(id));
  if (error) {
    res.status(400).json(error.message);
  } else {
    if (!question) {
      res.status(404).json(`There are no quiz question with that id: ${id}...`);
    } else {
      const result = checkAnswer(answer, id);
      res.status(200).json(result);
    }
  }
});

function validate(req) {
  const schema = Joi.object({
    id: Joi.number().required(), 
    answer: Joi.string().max(400).required()
  });
  return schema.validate(req);
}

function checkAnswer(answer, id) {
  const question = quiz.find(c => c.id === id);
  const correctAnswer = question.correct;
  if (answer === correctAnswer) {
    return true;
  } else {
    return false;
  }
}

module.exports = router; 