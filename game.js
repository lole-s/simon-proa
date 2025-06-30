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
    $("#level-title").text("Level " + level); // Mostrar el nivel actual
    nextSequence(); // Generar el primer color de la secuencia
    started = true; // Cambiar el estado a iniciado
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

  // Elegir un color aleatorio y agregarlo a la secuencia del juego
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  showSequence(); // Mostrar la secuencia al usuario
}

// Función para mostrar la secuencia de colores al usuario
function showSequence() {
  let i = 0;
  // Usar setInterval para mostrar cada color con un pequeño retraso
  const interval = setInterval(() => {
    var currentColour = gamePattern[i];
    // Animar el botón correspondiente
    $("#" + currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(currentColour); // Reproducir el sonido del color
    i++;
    // Cuando termina la secuencia, detener el intervalo
    if (i >= gamePattern.length) {
      clearInterval(interval);
    }
  }, 600);
}

// Función para verificar si el usuario acertó la secuencia
function checkAnswer(currentLevel) {
  // Comparar el último color elegido por el usuario con el de la secuencia del juego
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Si el usuario completó toda la secuencia correctamente
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Generar el siguiente nivel después de 1 segundo
      }, 1000);
    }
  } else {
    // Si el usuario se equivoca
    playSound("wrong"); // Reproducir sonido de error
    $("body").addClass("game-over"); // Agregar efecto visual de "game over"
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart"); // Mostrar mensaje de fin de juego

    startOver(); // Reiniciar las variables del juego
  }
}

// Función para reproducir sonidos según el nombre del color
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Función para animar el botón presionado por el usuario
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed"); // Agregar clase CSS para animación
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed"); // Quitar la animación después de 100ms
  }, 100);
}

// Función para reiniciar las variables del juego cuando termina
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
