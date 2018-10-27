$(document).ready(function(){
    //start the game on "Start Button"
$('#start-button').on('click, gameStatus.startTime');
});

// Game Start
var gameStatus = {
//start timer and count down by seconds 
timeRemaining: 60,
// Show the questions 
timerStart: function() 
{
    $('#timer').text('Time remaining:' + gameStatus.timeRemaining);
    setInterval(gameStatus.countdown, 1000);
    $('#start-page').hide();
    trivia.displayQuestions();
    console.log(this.timerStart);
}, 

//counting down 
countdown: function()
{
    gameStatus.timeRemaining --;
    $('#timer').text('Time remaining:' + gameStatus.timeRemaining);
    if(gameStatus.timeRemaining===0){
        gameStatus.stopTimer();
        $('#timer').empty();
    }
},

// check answers 
stopTimer:function(){
    clearInterval();
    trivia.checkAnswers();
},
}
//declare questions 
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

// console.log(question0); WORKED!
//created an array for the questions

var questionsArray = [question0,question1,question2,question3,question4,question5,question6,question7,question8,question9];

