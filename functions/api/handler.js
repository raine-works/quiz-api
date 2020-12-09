const admin = require('firebase-admin');
const secret = require('../secret.json');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

exports.getQuiz = async (requestedQuiz) => {
  db.collection('quizzes').where('name', '==', requestedQuiz).get()
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log('No matching quizzes...');
    } else {
      snapshot.forEach(doc => {
        console.log(doc.data());
        return doc.data();
      })
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.checkAnswer = async (id, answer, quiz) => {
  const q = quiz.find(c => c.id === id);
  if (answer === q.correct) {
    return true;
  } else {
    return false;
  }
}