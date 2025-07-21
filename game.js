// Array con los colores posibles de los botones
var buttonColours = ["red", "blue", "green", "yellow"];

// Secuencia de colores generada por el juego
var gamePattern = [];

// Secuencia de colores que el usuario va haciendo clic
var userClickedPattern = [];

// Variable para saber si el juego ya empezó
var started = false;

// Nivel actual del juego
var level = 0;



// Iniciar el juego al presionar cualquier tecla
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level); //nivel actual
    document.title = "Level " + level; //nivel en el título
    nextSequence(); // generar el primer color
    started = true; // cambiar el estado a iniciado
  }
});



// Capturar clics del usuario en los botones de colores
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id"); // Obtener el color del botón clickeado
  userClickedPattern.push(userChosenColour); // Guardar el color en la secuencia del usuario

  playSound(userChosenColour); // Reproducir el sonido del color
  animatePress(userChosenColour); // Animar el botón presionado

  checkAnswer(userClickedPattern.length - 1); // Verificar si el usuario acertó
});

// Función que genera un nuevo paso en la secuencia del juego
function nextSequence() {
  userClickedPattern = []; // Reiniciar la secuencia del usuario para el nuevo nivel
  level++; // Aumentar el nivel
  $("#level-title").text("Level " + level); // Mostrar el nuevo nivel
  document.title = "Level " + level; // Mostrar nivel en el título de la pestaña

  // Elegir un color aleatorio y agregarlo a la secuencia del juego
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  showSequence(); // Mostrar la secuencia al usuario
}

// Función para mostrar la secuencia de colores al usuario
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

// Función para verificar si el usuario acertó la secuencia
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    document.title = "Game Over"; // También mostrar "Game Over" en el título de la pestaña

    startOver();
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
