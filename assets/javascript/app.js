(function() {
    var questions =[{
        question: "What was the first-ever Disney movie to get a soundtrack released?",
        answer: "Snow White and the Seven Dwarfs",
        choices: ['Snow White and the Seven Dwarfs','Pinocchio','Steamboat Willie','Fantasia'],
        correctAnswer: 0,
       
    },{ 
        question:'All of the following singers have voiced Disney Characters, but only one was a disney princess. Who was it?',
        answer: "Mandy Moore",
        choices: ['Miley Cyrus','Priyanka Chopra','Mandy Moore', 'Eartha Kitt'],
        correctAnswer: 2,
        
    },{
        question: "Which Disney classic was the longest-running No. 1 hit on the Billboard Hot 100?",
        answer: "All for love from 'The Three Musketeers",
        choices: ['Colors of the Wind','A Whole New World','Let it Go','All for Love'],
        correctAnswer: 3,
        
    },{
        question: "Who was the first DJ to appear on a Disney/Pixar film's soundtrack?",
        answer: "Skrillex",
        choices: ["Skrillex","Diplo","Deadmau5","Moby"],
        correctAnswer: 0,
    },{
        question: "Who sang 'Reflection' from the movie Mulan?",
        answer: "Christina Aguilera",
        choices: ["98 Degree","Christina Aguilera","Demi Lovato","Miley Cyrus"],
        correctAnswer: 1,
    },{
        question: "Which Disney movie is 'Someday My Prince will Come' from?",
        answer: "Snow White",
        choices: ['The Little Mermaid','Snow White', 'Sleeping Beauty','Enchanted'],
        correctAnswer: 1,
    },{
        question: "Which Disney movie is 'A Dream is a Wish Your Heart Made' from?",
        answer: "Cinderella",
        choices: ['Snow White', 'Sleeping Beauty','Enchanted','Cinderella'],
        correctAnswer: 3,
    },{
        question: "Which Disney movie is 'Under the Sea' from?",
        answer: "The Little Mermaid",
        choices: ['The Little Mermaid','Finding Nemo', 'Sleeping Beauty','Pinocchio'],
        correctAnswer: 0,
    },{
        question: "Which Disney movie is 'Let it Go' from?",
        answer: "Frozen",
        choices: ['The Little Mermaid','The Lion King', 'THe Jingle Book','Frozen'],
        correctAnswer: 3,
    },{
        question: "Which Disney movie is 'Be Our Guest' from?",
        answer: "Beauty and the Beast ",
        choices: ['Beauty and the Beast','Snow White', 'Sleeping Beauty', 'Aladdin'],
        correctAnswer: 0,
    }];
    
    
    var questionContainer = 0; 
    var choices = [];
    var trivia = $('#trivia'); 
    
    displayNext();
    
    $('#next').on('click', function(event) {
      event.preventDefault();
      
      // fade animation
      if(trivia.is(':animated')) {        
        return false;
      }
      choose();
      
      if (isNaN(choices[questionContainer])) {
        alert('You didnt make a selection, please make one!');
      } else {
        questionContainer++;
        displayNext();
      }
    });
    // //timer
    // timer();
	// $('.next').on('click',function(){
	// 	userSelect = $(this).data('index');
	// 	clearInterval(time);
	// 	answerPage();
	// });
    // function timer(){
    //     seconds = 15;
    //     $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    //     answered = true;
    //     //sets timer to go down
    //     time = setInterval(showCountdown, 1000);
    // }
    
    // function showCountdown(){
    //     seconds--;
    //     $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    //     if(seconds < 1){
    //         clearInterval(time);
    //         answered = false;
    
    
//question and answer container
    function creatElementId(answerOptions) {
      var choices = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (answerOptions + 1) + ':</h2>');
      choices.append(header);
      
      var question = $('<p>').append(questions[answerOptions].question);
      choices.append(question);
      
      var radioButtons = createRadios(answerOptions);
      choices.append(radioButtons);
      
      return choices;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(answerOptions) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[answerOptions].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[answerOptions].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // credit to another user,forgot who but it worked 
    function choose() {
      choices[questionContainer] = +$('input[name="answer"]:checked').val();
    }
    
    // 
    function displayNext() {
      trivia.fadeOut(function() {
        $('#question').remove();
        
        if(questionContainer < questions.length){
          var nextQuestion = creatElementId(questionContainer);
          trivia.append(nextQuestion).fadeIn();
          if (!(isNaN(choices[questionContainer]))) {
            $('input[value='+choices[questionContainer]+']').prop('checked', true);
          }
          if(questionContainer === 1){
            $('#next').show();
          }
        }else {
          var scoreBoard = userScore();
          trivia.append(scoreBoard).fadeIn();
          $('#next').hide();
        }
      });
    }
    
//score & final Page 
    function userScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < choices.length; i++) {
        if (choices[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect +" "+ "right!!!");
      return score;
    }
  })();