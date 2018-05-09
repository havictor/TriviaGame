var correctCount = 0;
var incorrectCount = 0;
var progressCount = 0;
var timerCount = 5; //change back to 31 in final version
var timer;

var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;

var quiz = {"question": ["Due to excessive sand and gravel, the motorcycle rider must not drive:", "To make a safe turn, the motorcyclist must:", "The motorcyclist should avoid driving on which part of the road when it is raining?", "When a motorcycle rider wants toturn while moving faster than 25 km/h, s/he must use the", "The area slightly to the left or right of the centre of the lane is called the", "While making a turn, the passenger on a motorcycle must", "The taillights of other vehicles are useful to motorists", "Which of the following will affect motorcycle riders more than four-wheel vehicle drivers?", "How much stopping power is provided by the rear brake?", "The three principles used when braking hard in a turn are", "The use of the front brake should be avoided in which of the following circumstances?", "The motorcycle rider must use the following for correct stopping"],
"answer1": ["Along the side of the pavement", "lean the bike against the direction of the turn", "on curved roads", "brakes blocking method", "bike track", "bend backwards", "to estimate the distance of the vehicle", "Blood alcohol content", "One quarter of total stopping power", "control, straighten, move", "if the surface is extremely slippery", "Front brake first and the rear brake next"],
"answer2":["Near the left edge of the right lane", "take sharp turn", "centre of the lane", "gear changing method", "tire travel","maintain straight posture", "to avoid blindspots of the vehicle", "Road and weather conditions", "No stopping power", "square, push, lean", "when going down a hill","Both brakes simultaneously"],
"answer3": ["Along the middle of the lane", "lean the bike in the direction of the turn", "left edge of the lane", "push steering method", "tire track", "lean in  the direction of the turn", "to see the bumps or rough pavement", "Speed limit on highways", "Half of total stopping power", "turn, slow, squeeze", "on a four-way road", "Only the rear brake"],
"answer4": ["Near the right edge of the left lane", "use a higher gear", "right edge of the lane", "clutch pushing method", "vehicle track", "lean in the opposite direction of the turn", "to judge the speed of hte vehicle", "Visibility of oncoming vehicles", "Three quarters of total stopping power", "straighten, square, squeeze", "near intersections", "Only the front brake"],
"answerKey": [function(){answer1 = 1; answer2 = 0}, function(){answer3 = 1, answer1 = 0}, function(){answer2 = 1; answer3 = 0}, function(){answer3 = 1; answer2 = 0}, function() {answer3 = 0; answer3 = 1;}, function() {answer3 = 0; answer3 = 1;}, function() {answer3 = 0; answer3 = 1;}, function() {answer3 = 0; answer2 = 1;}, function() {answer2 = 0; answer1 = 1;}, function() {answer1 = 0; answer4 = 1;}, function() {answer4 = 0; answer1 = 1;}, function() {answer1 = 0; answer2 = 1;}]
}



$(document).ready(
nextQuestion(),
decrease()
);

function nextQuestion() {
    $("#question").text(quiz.question[progressCount])
    $("#answer1").text(quiz.answer1[progressCount])
    $("#answer2").text(quiz.answer2[progressCount])
    $("#answer3").text(quiz.answer3[progressCount])
    $("#answer4").text(quiz.answer4[progressCount])
    quiz.answerKey[progressCount]()
    $("#answer1").attr("data-correct", answer1)
    $("#answer2").attr("data-correct", answer2)
    $("#answer3").attr("data-correct", answer3)
    $("#answer4").attr("data-correct", answer4)
}


function decrease() {
    clearInterval(timerCount);
    timerCount--;
    timer = setTimeout(decrease, 1000);
    $("#timer").text("Time remaining: "+timerCount);
    if (timerCount == 0) {
        clearInterval(timer);
        incorrectCount++;
        resolveAnswer(); // ??
        //display message for timeout
    }
}

$(".answer").click(resolveAnswer);

//multiple choice questions created
//end condition when time runs out
//reveal questions right/wrong at end of time
//cannot pick more than 1 answer per question
//countdown timer


var check

function resolveAnswer() {
    progressCount++
    check = $(this).attr("data-correct");
    if (check == "1") {
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
    $(this).addClass("selected");
    for (var k = 1; k < 4; k++) {
        if ("answer"+k == true) {
            $(answer+k).addClass("correct")
        }
    } //displays correct answer, but i don't think so?
};

function delayToNextQuestion() {
    if (progressCount != 12) {
        $("#answer1").removeClass("correct");
        $("#answer1").removeClass("selected");

        $("#answer2").removeClass("correct");
        $("#answer2").removeClass("selected");

        $("#answer3").removeClass("correct");
        $("#answer3").removeClass("selected");

        $("#answer4").removeClass("correct");
        $("#answer4").removeClass("selected");
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