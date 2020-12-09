const express = require('express');
const router = express.Router();
const Joi = require('joi');
const handler = require('../handler');

// Quiz JSON file.
//const quiz = require('./old-greg.json');

// Gets quiz questions and available multiple choice answers.
router.get('/quiz/:id', (req, res) => {
  console.log(req.params.id);
  const respond = async () => {
    const quiz = await handler.getQuiz(req.params.id);
    if (!quiz) {
      res.status(404).json('No matching quizzes...');
    } else {
      res.status(200).json(quiz);
    };
  }; 
  respond();
});

// Validates if the selected answer is correct. 
router.get('/validate/:id', (req, res) => {
  const quiz = handler.getQuiz(req.params.id);
  const qId = parseInt(req.query.id);
  const answer = req.query.answer; 
  const { error } = validate(req.query);
  const question = quiz.find(c => c.indexOf(qId));
  if (error) {
    res.status(400).json(error.message);
  } else {
    if (!question) {
      res.status(404).json(`There are no quiz question with that id: ${qId}...`);
    } else {
      const respond = async () => {
        const result = await handler.checkAnswer(qId, answer, quiz);
        res.status(200).json(result);
      };
      respond();
    }
  }
});

// Validates if the request meets the requirements.
function validate(req) {
  const schema = Joi.object({
    id: Joi.number().required(), 
    answer: Joi.string().max(400).required()
  });
  return schema.validate(req);
}

module.exports = router; 