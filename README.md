This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# StudyUp

### Project Description

StudyUp is a tool for users to practice javascript fundamentals through a series of 30 quizzes on array, string, and object prototype methods. Each quiz presents a question and three possible answers. If the user answers a question correctly, a message is displayed letting the user know she was right and offers an explanation for why that was the correct answer. If the user answers a question incorrectly, a message is displayed letting the user know she was incorrect and gives her the correct answer. A question answered incorrectly is added to a bank of review quizzes, which the user can visit to review later. Either way, an answered question is removed from the bank of available quizzes so that the user is not given the same quiz twice. Both the available quizzes and review quizzes are saved to local storage to persist on reload. When a user chooses to "start over", local storage is cleared and a new session begins. 

### Screenshots

Begin
<img width="693" alt="begin" src="https://user-images.githubusercontent.com/43555476/53501375-45e31d80-3a69-11e9-9fd7-801112d3dc00.png">

Question
<img width="693" alt="question" src="https://user-images.githubusercontent.com/43555476/53501378-47ace100-3a69-11e9-848b-ca7b1af7e70b.png">

Message
<img width="694" alt="correct response" src="https://user-images.githubusercontent.com/43555476/53501382-4976a480-3a69-11e9-8d0f-c89ea5cf3b50.png">

### Setup

- <code> git clone </code>
- <code> npm install </code> 

### Built With

- HTML, CSS / SCSS, JavasSript
- React
- Jest / Enzyme 

### Next Steps

- Refactor React components to better adhere to SRP (addressed further in issues)
- Allow user to return to available quizzes after a review session has begun (addressed further in issues)
- Style buttons to indicate that they've been enabled/disabled

### Orginal Assignment 

<a href=http://frontend.turing.io/projects/memoize.html>Memoize</a> project from <a href="https://turing.io/">Turing School of Software and Design</a>, Mod 2
