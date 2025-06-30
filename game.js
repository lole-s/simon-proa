var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// Iniciar el juego al presionar una tecla
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Capturar clics del usuario
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// Función que genera un nuevo paso en la secuencia
function nextSequence() {
  userClickedPattern = []; // Reiniciar la secuencia del usuario
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  showSequence();
}

function showSequence() {
  let i = 0;
  const interval = setInterval(() => {
    var currentColour = gamePattern[i];
    $("#" + currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(currentColour);
    i++;
    if (i >= gamePattern.length) {
      clearInterval(interval);
    }
  }, 600);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Si el usuario acertó toda la secuencia
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // Si se equivocó
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

// Función para reproducir sonidos
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animación al presionar botón
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Reiniciar el juego
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
