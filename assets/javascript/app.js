$(document).ready(function()
{
//global variables 
var questionsArray= [question0,question1,question2,question3,question4,question5,question6,question7,question8,question9];
var timeStart;
var timeStop;
var reset;
var finalScore;
var nextQuestion;
var timer;
var questionContainer=0;
var startGame;
var timeRemain;
var gameStatus;
var answerCheck

});
var question0 = 
{
    question: "What was the first-ever Disney movie to get a soundtrack released?",
    answer: "Snow White and the Seven Dwarfs",
    choices: ['Snow White and the Seven Dwarfs','Pinocchio','Steamboat Willie','Fantasia'],
    correctAnswer: 0,
   
};

var question1 =
{
    question:'All of the following singers have voiced Disney Characters, but only one was a disney princess. Who was it?',
    answer: "Mandy Moore",
    choices: ['Miley Cyrus','Priyanka Chopra','Mandy Moore', 'Eartha Kitt'],
    correctAnswer: 2,
    
};

var question2 =
{
    question: "Which Disney classic was the longest-running No. 1 hit on the Billboard Hot 100?",
    answer: "All for love from 'The Three Musketeers",
    choices: ['Colors of the Wind','A Whole New World','Let it Go','All for Love'],
    correctAnswer: 3,
    
};

var question3 = 
{
    question: "Who was the first DJ to appear on a Disney/Pixar film's soundtrack?",
	answer: "Skrillex",
	choices: ["Skrillex","Diplo","Deadmau5","Moby"],
    correctAnswer: 0,
};

var question4 = 
{
    question: "Who sang 'Reflection' from the movie Mulan?",
	answer: "Christina Aguilera",
	choices: ["98 Degree"],
    correctAnswer: 1,
};

var question5 = 
{
    question: "Which Disney movie is 'Someday My Prince will Come' from?",
	answer: "Snow White",
	choices: ['The Little Mermaid','Snow White', 'Sleeping Beauty','Enchanted'],
    correctAnswer: 1,
};

var question6= 
{
    question: "Which Disney movie is 'A Dream is a Wish Your Heart Made' from?",
	answer: "Cinderella",
	choices: ['Snow White', 'Sleeping Beauty','Enchanted','Cinderella'],
    correctAnswer: 3,
};

var question7 =
{
    question: "Which Disney movie is 'Under the Sea' from?",
	answer: "The Little Mermaid",
	choices: ['The Little Mermaid','Finding Nemo', 'Sleeping Beauty','Pinocchio'],
    correctAnswer: 0,
};

var question8 = 
{
    question: "Which Disney movie is 'Let it Go' from?",
	answer: "Frozen",
	choices: ['The Little Mermaid','The Lion King', 'THe Jingle Book','Frozen'],
    correctAnswer: 3,
};

var question9=
{
    question: "Which Disney movie is 'Be Our Guest' from?",
	answer: "Beauty and the Beast ",
	choices: ['Beauty and the Beast','Snow White', 'Sleeping Beauty', 'Aladdin'],
    correctAnswer: 0,
};
// console.log(question3);

//before btn is clicked, hiding elements
$('#timer').hide();
$('#button').hide();
$('#reset').hide();
$('#finalScore').hide();
$('#questionContainer').hide();


$('#welcomebtn').on('click', startGame.timeStart);
{ 
    // console.log(welcomebtn); didnt work =(
   startGame();
   timeStart();
   questionContainer();
   timer();
   reset();
}

//Timer in Game Mode 
var startGame= 
{
timeRemain:60,
//timer start 
timeStart:function() {
    $('#welcomebtn').text("Time Remaining:"+gameStatus.timeRemain);
    setInterval(gameStatus.countdown, 1000);
    $('#homepage').hide();
    startGame.questionContainer();
    
},
timeStop:function(){
    gameStatus.timeRemain--;
    $('#timer').text("Time Remaining:"+gameStatus.timeRemain);
    if (gameStatus.timeRemain===0){
        gameStatus.timeStop();
        $('#timer').empty();
    }
}
}
//start game  & display questions 
function startGame()
{
    $('#question').html(''+ questionsArray[questionContainer].question+'');
    $("#button0").text(questionsArray[questionContainer].choices[0]);
    $("#button1").text(questionsArray[questionContainer].choices[1]);
	$("#button2").text(questionsArray[questionContainer].choices[2]);
	$("#button3").text(questionsArray[questionContainer].choices[3]);
}
//check user answer
 $('.btn').on("click",'.answer', function(){
     userAnswer=$(this).text();
     if(userAnswer===answer[questionContainer]) {
         clearInterval(timer);
            win();
 }
 else {
     clearInterval(timer);
     loss();
 }
 });

 //final page and scores 
 var finalScore = {
     correct:0;
     incorrect:0;
     unanswered:0;
 };

 //reset function 
 function reset() {
     correct=0;
     incorrect=0;
     unanswered=0;
     timeRemain=60;
 }

