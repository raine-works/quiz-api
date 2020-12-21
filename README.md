# quiz-api
An API for getting multiple choice quiz questions and validating answers to check if they are correct. 

As of today there is only one quiz available. How well do you know old greg? Available at quizzes.raineworks.com/api/quiz/old-greg

To use this API you can retrieve a quiz by sending a GET request to quizzes.raineworks.com/api/quiz/[ID]

Example: The ID for the Old Greg quiz is "old-greg", quizzes.raineworks.com/api/quiz/old-greg. 

To validate if an answer to a question is corret send a GET request to quizzes.raineworks.com/api/validate/[ID]?id=[ID]&answer=[ANSWER]

Example: quizzes.raineworks.com/api/validate/old-greg?id=1&answer=Black_Lake


