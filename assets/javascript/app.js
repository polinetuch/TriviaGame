// array of questions
// each array has 3 properties: question, choices and correctAnswer
// each property also contain its own string
var quizzQuestions = [
  {
    question: "What is Popeye's favourite food?",
    choices: ["Broccoli", "Lettuce", "Spinach", "Beans"],
    correctAnswer: "Spinach"
  },

  {
    question: "Who was Popeye's girlfriend?",
    choices: ["Linseed Oil", "Olive Oil", "Sunflower Oil", "Olive Oyl"],
    correctAnswer: "Olive Oyl"
  },

  {
    question: "What is the name of Popeye's father?",
    choices: ["Daddy", "Da Da", "Santa", "Poopdeck Pappy"],
    correctAnswer: "Poopdeck Pappy"
  }
];

var counter = 30;
var currentQuestion = 0;
var correctGuess = 0;
var incorrectGuess = 0;
var timer;

function displayQuestion() {
  var question = quizzQuestions[currentQuestion].question;
  var choices = quizzQuestions[currentQuestion].choices;
  $("#displayQuestionAnswer").html("<h4>" + question + "</h4>");
  $("#timer").html("<h4>Timer: " + counter + "</h4>");
}
displayQuestion();
