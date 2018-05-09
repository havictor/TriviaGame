var correctCount = 0;
var incorrectCount = 0;
var progressCount = 0;
var timerCount = 5; //change back to 31 in final version
var timer;

var quiz = {
    Question1: 
}

var answer1 = false;
var answer2 = false;
var answer3 = false;
var answer4 = false;

decrease();

function decrease() {
    clearInterval(timerCount);
    timerCount--;
    timer = setTimeout(decrease, 1000);
    $("#timer").html("Time remaining: "+timerCount);
    if (timerCount == 0) {
        clearInterval(timer);
        incorrectCount++;
        //display message for timeout
    }
}

$("#answer").click(resolveAnswer);

//multiple choice questions created
//end condition when time runs out
//reveal questions right/wrong at end of time
//cannot pick more than 1 answer per question
//countdown timer



function resolveAnswer() {
    progressCount++
    if ($(this).data("answer") == true) {
        correctAnswer();
    }
    else {
        incorrectAnswer();
    }
    setTimeout(delayToNextQuestion, 5000);
};

function correctAnswer() {
    correctCount++
    $(this).addClass("correct");
    //display correct answer
};

function incorrectAnswer() {
    incorrectCount++
    //display correct answer, highlight selected??
};

function delayToNextQuestion() {
    if (progressCount != 12) {
        
    }
    else {
        //display final screen
    }
};



//

//upon correct, show correct answer
    //maybe highlight incorrect choice selected


//if timer runs out, advise time up, and show correct answer.
//if wrong answer, advise wrong answer and then display correct answer.

//timer to begin next question

//if no more questions, dsiplay correctCount and incorrectCount
    //option to restart game (without reloading page)