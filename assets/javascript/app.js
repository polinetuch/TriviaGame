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

var correctGuess = 0;
var incorrectGuess = 0;
var currentQuestion = 0;
var timer;
var counter = 10;

function loadNextQuestion() {
  var noMoreQuestion = quizzQuestions.length - 1 === currentQuestion;

  // if the last index of the question equals to the currenQuestion then stop running the time
  if (noMoreQuestion) {
    console.log("Game's over!");
  }
  // if it's not the last index of the question - repeat the countdown from 10 seconds
  else {
    // display the next question
    currentQuestion++;
    // recall the function to display the next question
    displayQuestion();
  }
}

// function to clear the timer
function timeUp() {
  // stop the time from keep counting down after 0
  clearInterval(timer);
  console.log("Time's Up!");
  loadNextQuestion();
}

function countDown() {
  // decrement the time by seconds
  counter--;
  // display the count down time in the html element with an id timer
  $("#timer").html("Timer: " + counter);

  // when time reaches 0, execute the timeUp function
  if (counter === 0) {
    timeUp();
  }
}

// display questions to the browser
function displayQuestion() {
  counter = 10;
  timer = setInterval(countDown, 1000);

  var question = quizzQuestions[currentQuestion].question;
  var choices = quizzQuestions[currentQuestion].choices;

  $("#timer").html("Timer: " + counter);

  $("#displayQuestionAnswer").html(
    "<h4>" + question + "</h4>" + displayChoices(choices)
  );
}
displayQuestion();

// display choices to the browser
function displayChoices(choices) {
  var result = "";
  for (var i = 0; i < choices.length; i++) {
    result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
  }
  return result;
}

// on click event for the choices
$(".choice").on("click", function() {
  clearInterval(timer);
  var selectedChoice = $(this).attr("data-answer");
  var correctAnswerGuessed = quizzQuestions[currentQuestion].correctAnswer;
  if (correctAnswerGuessed === selectedChoice) {
    correctGuess++;
    console.log("Win");
    loadNextQuestion();
  } else {
    incorrectGuess++;
    console.log("Lose");
    loadNextQuestion();
  }
});

function displayResult() {
  var result = `
  <p>Your Correct Guess ${correctGuess} questions right</p>
  <p>Your Incorrect Guess ${incorrectGuess} questions</p>
  <p>Total questions ${quizzQuestions.length} questions right</p>
  <button class="btn btn-primary" id="reset">Reset Game</button>
  `;
  $("#displayQuestionAnswer").html(result);
}

$(".btn-primary").on("click", function() {
  $(".btn-primary").remove();
});
