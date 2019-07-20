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

// function to clear the timer
function timeUp() {
  // stop the time from keep counting down after 0
  clearInterval(timer);
  alert("Time's Up!");
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
console.log(displayChoices(choices));

$(".btn-primary").on("click", function() {
  $(".btn-primary").remove();
});
