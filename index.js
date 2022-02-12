var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$('.btn').click(function(){

    var userChoosenColor = $(this).attr('id');
    userClickedPattern.push(userChoosenColor);
    console.log(userClickedPattern);

    playSound(userChoosenColor);

    animation(userChoosenColor);

})

function playSound(name){

    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();

}


function newSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    console.log(randomChoosenColor);

    playSound(randomChoosenColor);

    animation(randomChoosenColor); 

}

function animation(a){

    $('#'+a).fadeIn('fast').fadeOut('fast').fadeIn('fast');

}

newSequence();


