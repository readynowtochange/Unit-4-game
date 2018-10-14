var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["/4assets/4images/oldmanclimber.jpg", "/4assets/4images/womanclimbing.jpg", "/4assets/4images/topofmtn.jpg", "/4assets/4images/repelclimb.jpg"];


function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 120) + 19;  
}

function resetClimbers() {
    for (var i = 0; i < images.length; i++) {
        var climber = $("<img>");
        climber.addClass("climber");
        climber.attr("src", images[i]);
        climber.attr("value", (Math.floor(Math.random() * 12) + 1));
        climber.attr("height", "100");
        $(".climber-images").append(climber);
    }
}

function resetHTML() {
    $(".target-number").html(targetNumber);
    $(".wins-losses-counter").html("<div> Wins: " + wins + "</div>" + "<div>Losses: " + losses + "</div>");
    $(".score-number").html(counter);
    $(".climber-images").empty();
}

function totalReset(){
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetClimbers();
}

randomTargetNumber();
resetHTML ();
resetClimbers();


function climbersClick() {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter === targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".climber", climbersClick);