# quiz-api
An API for getting multiple choice quiz questions and validating answers to check if they are correct. 

As of today there is only one quiz available. How well do you know old greg? Available at quizzes.raineworks.com/api/old-greg/quiz.

Use "quizzes.raineworks.com/api/${quiz-name}/quiz" to get the quiz questions, multiple choice answers, and correct answer. 
To check if a users answer to a question is correct use "quizzes.raineworks.com/api/${quiz-name}/validate?id=${id}&answer=${answer}". 
By passing the ID and answer in the params object of your request you will recieve either a TRUE or FALSE response. 

More quizzes coming soon. 

If you would like to build off what I've started feel free to clone this repo. 
CD into the functions directory and run "npm install" to install the required node packages. 
