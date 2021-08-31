var readlineSync = require('readline-sync')
var userName = readlineSync.question("May I know your name? ")

console.log("Welcome "+userName+" to how well Do You Know Me game")

console.log("          ")
var score = 0

var highScore =[
  {
    name : "Urvashi",
    score : 10
  }
]
var questions =[{
  question : "Where do I live?",
  answer : "Varanasi"
},
{
  question : "What is my profession?",
  answer : "Student"
},
{
  question : "Who is my favourite bollywood Hero?",
  answer : "Siddharth Malhotra"
},
{
  question : "What is my favourite color?",
  answer : "Black"
},
{
  question : "Which is my zodiac sign?",
  answer : "Scorpio"
}]

function playQuiz(question,answer)
{
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Correct Buddy!!")
    score=score+2
  }
  else{
    console.log("Oops wrong answer ")
  }
  console.log("Current Score "+score)
  console.log("       ")
}

function quiz()
{
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i]
    playQuiz(currentQuestion.question,currentQuestion.answer)
  }
}

console.log("             ")
function finalScore()
{
  console.log("YAY you scored "+score+" !!")
  console.log("     ")
  console.log("Check out high score,if you should be there ,ping me . I will update it")
  console.log("     ")
  highScore.map(score => console.log(score.name ," : ",score.score))
}
quiz()
finalScore()