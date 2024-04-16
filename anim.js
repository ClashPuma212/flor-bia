document.addEventListener("DOMContentLoaded", function() {
  var audio = document.querySelector("audio");
  var lyrics = document.querySelector("#lyrics");
  console.log(audio); // Verifica se o elemento de áudio foi selecionado corretamente
  console.log(lyrics); // Verifica se o elemento de lyrics foi selecionado corretamente

  audio.addEventListener("timeupdate", updateLyrics);
});

var lyricsData = [
  { text: "Hi, Don't say hello, say hi", time: 3 },
  { text: "Hi, Hi to a higher star", time: 5 },
  { text: "Far, Happiness isn't far", time: 10 },
  { text: "Far, Not far from where you are", time: 15 },
  { text: "Watching your sky", time: 20 },
  { text: "Turn around, I'm right behind you", time: 25 },
  { text: "Turn around, I'll turn around too", time: 30 },
  { text: "Turn around, so we can hold hands", time: 35 },
  { text: "Turn around and put your pen down", time: 40 },
  { text: "Turn around, your feet off the ground", time: 45 },
  { text: "Turn around, and your head in the clouds", time: 50 },
  { text: "Hi, don't say hello, say hi", time: 55 },
  { text: "Hi to a higher sky", time: 60 },
  { text: "Hi to a higher ground", time: 65 },
  { text: "Loud, why don't you sing out loud", time: 70 },
  { text: "The world you keep inside?", time: 75 },
  { text: "Why don't sing it out loud?", time: 80 },
  { text: "Why don't you sing out loud", time: 85 },
  { text: "The song you keep inside?", time: 90 },
];

function updateLyrics() {
var time = audio.currentTime;
var currentLine = lyricsData.find(
  (line) => time >= line.time && time < line.time + 6
);

if (currentLine) {
  var fadeInDuration = 0.5; // Ajuste o tempo de fade-in conforme desejado
  var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

  lyrics.style.opacity = opacity;
  lyrics.innerHTML = currentLine.text;
} else {
  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
}
}

function ocultarTitulo() {
var titulo = document.querySelector(".titulo");
titulo.style.animation =
  "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
setTimeout(function () {
  titulo.style.display = "none";
}, 3000); // Espera 3 segundos antes de ocultar completamente
}

setTimeout(ocultarTitulo, 210000);