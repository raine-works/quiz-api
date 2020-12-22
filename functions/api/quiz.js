const express = require('express');
const router = express.Router();
const Joi = require('joi');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

// Gets quiz questions and available multiple choice answers.
router.get('/quiz/:id', (req, res) => {

  (function (requestedData) {
    db.collection('quizzes').where('name', '==', requestedData).get()
    .then((snapshot) => {
      snapshot.forEach(doc => {
        if(!doc) {
          res.status(404).json('No matching quizzes...');
        } else {

          // Prevents the correct answers from being sent to the front end.
          let resData = [];
          for(let i = 0; i < doc.data().questions.length; i++) {
            let q = {
              id: doc.data().questions[i].id,
              question: doc.data().questions[i].question, 
              answers: doc.data().questions[i].answers
            };
            resData.push(q);
          }
          res.status(200).json(resData);
        }
      })
    })
    .catch((error) => {
      console.log(error);
    })
  })(req.params.id);

});

// Validates if the selected answer is correct. 
router.get('/validate/:id', (req, res) => {

  (function (quiz, qId, answer) {
    const { error } = validate(req.query);
    if(error) {
      res.status(400).json(error.message);
    } else {
      db.collection('quizzes').where('name', '==', quiz).get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          if(!doc) {
            res.status(404).json('No matching quizzes...');
          } else {
            let questions = doc.data().questions;
            for(let i = 0; i < questions.length; i++) {
              if(questions[i].id === qId) {
                if(questions[i].correct === answer) {
                  res.status(200).json('true');
                } else {
                  res.status(200).json('false');
                }
              }
            }
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
    }
  })(req.params.id, parseInt(req.query.id), req.query.answer);

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