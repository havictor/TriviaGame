var correctCount = 0;
var incorrectCount = 0;
var progressCount = 0; //set to 0 at final version
var timerCount = 5; //change back to 31 in final version
var timer;
var delay;

var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;

var quiz = {"question": ["Due to excessive sand and gravel, the motorcycle rider must not drive:", "To make a safe turn, the motorcyclist must:", "The motorcyclist should avoid driving on which part of the road when it is raining?", "When a motorcycle rider wants toturn while moving faster than 25 km/h, s/he must use the", "The area slightly to the left or right of the centre of the lane is called the", "While making a turn, the passenger on a motorcycle must", "The taillights of other vehicles are useful to motorists", "Which of the following will affect motorcycle riders more than four-wheel vehicle drivers?", "How much stopping power is provided by the rear brake?", "The three principles used when braking hard in a turn are", "The use of the front brake should be avoided in which of the following circumstances?", "The motorcycle rider must use the following for correct stopping"],
"answer1": ["Along the side of the pavement", "lean the bike against the direction of the turn", "on curved roads", "brakes blocking method", "bike track", "bend backwards", "to estimate the distance of the vehicle", "Blood alcohol content", "One quarter of total stopping power", "control, straighten, move", "if the surface is extremely slippery", "Front brake first and the rear brake next"],
"answer2":["Near the left edge of the right lane", "take sharp turn", "centre of the lane", "gear changing method", "tire travel","maintain straight posture", "to avoid blindspots of the vehicle", "Road and weather conditions", "No stopping power", "square, push, lean", "when going down a hill","Both brakes simultaneously"],
"answer3": ["Along the middle of the lane", "lean the bike in the direction of the turn", "left edge of the lane", "push steering method", "tire track", "lean in  the direction of the turn", "to see the bumps or rough pavement", "Speed limit on highways", "Half of total stopping power", "turn, slow, squeeze", "on a four-way road", "Only the rear brake"],
"answer4": ["Near the right edge of the left lane", "use a higher gear", "right edge of the lane", "clutch pushing method", "vehicle track", "lean in the opposite direction of the turn", "to judge the speed of hte vehicle", "Visibility of oncoming vehicles", "Three quarters of total stopping power", "straighten, square, squeeze", "near intersections", "Only the front brake"],
"answerKey": [function(){answer1 = 1; answer2 = 0; $("#answer1").addClass("hiddenTrue")}, function(){answer3 = 1, answer1 = 0; $("#answer3").addClass("hiddenTrue")}, function(){answer2 = 1; answer3 = 0; $("#answer2").addClass("hiddenTrue")}, function(){answer3 = 1; answer2 = 0; $("#answer3").addClass("hiddenTrue")}, function() {answer3 = 0; answer3 = 1; $("#answer3").addClass("hiddenTrue")}, function() {answer3 = 0; answer3 = 1; $("#answer3").addClass("hiddenTrue")}, function() {answer3 = 0; answer3 = 1; $("#answer3").addClass("hiddenTrue")}, function() {answer3 = 0; answer2 = 1; $("#answer2").addClass("hiddenTrue")}, function() {answer2 = 0; answer1 = 1; $("#answer1").addClass("hiddenTrue")}, function() {answer1 = 0; answer4 = 1; $("#answer4").addClass("hiddenTrue")}, function() {answer4 = 0; answer1 = 1; $("#answer1").addClass("hiddenTrue")}, function() {answer1 = 0; answer2 = 1; $("#answer2").addClass("hiddenTrue")}]
}

$(document).ready(
nextQuestion(),
decrease()
);

function nextQuestion() {
    $("#results").css("visibility", "hidden");
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
    timerCount = 5; //set to 31 later
    decrease()
}

function decrease() {
    clearInterval(timer);
    timerCount--;
    timer = setTimeout(decrease, 1000);
    $("#timer").text("Time remaining: "+timerCount);
    if (timerCount <= 0) {
        clearInterval(timer);
        incorrectAnswer();
        //display message for timeout
        delay();
    }
};

$(".answer").click(resolveAnswer);

function resolveAnswer() {
    clearInterval(timer);
    var check
    check = $(this).attr("data-correct");
    if ((check == "1") && ((correctCount + incorrectCount) <= progressCount)) {
        correctCount++
        $(this).addClass("correct");
        delay();
    }
    else if (((correctCount + incorrectCount) <= progressCount) && (check == "0")) {
        $(this).addClass("selected");
        incorrectAnswer();
        delay();
    }
};

function delay() {
    clearInterval(delayToNextQuestion);
    setTimeout(delayToNextQuestion, 5000);
}

function incorrectAnswer() {
    incorrectCount++
    $(".hiddenTrue").css("background-color", "green");
};

function delayToNextQuestion() {
    progressCount++
    $(".hiddenTrue").removeAttr("style");
    $("#answer1").removeClass("correct selected hiddenTrue");
    $("#answer2").removeClass("correct selected hiddenTrue");
    $("#answer3").removeClass("correct selected hiddenTrue");
    $("#answer4").removeClass("correct selected hiddenTrue");
    if (progressCount <= 11) {
        nextQuestion();
    }
    else {
        $(".game").css("visibility", "hidden");
        var Wresults = $("<div>");
        Wresults.text("Correct: "+correctCount);
        var Lresults = $("<div>");
        Lresults.text("Incorrect: "+incorrectCount);
        $("#results").css("visibility", "visible");
        $("#results").prepend(Wresults, Lresults);
        //display final screen
    }
};

$("#restart").click(function() {
    console.log("yolo")
    /*
    $("#results").empty();
    $(".game").css("visibility", "visible");
    $("#results").css("visibility", "hidden");
    correctCount = 0;
    incorrectCount = 0;
    progressCount = 0;
    timerCount = 5; //set to 31 in final version
    nextQuestion();
    */
});

//todo:
//if timer runs out, advise time up, and show correct answer.
//if wrong answer, advise wrong answer and then display correct answer.

//timer to begin next question
