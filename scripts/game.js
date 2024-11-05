let canvas;
let ctx;
let character = new Charakter();
let enemies = [new Chicken()];
let world = new World();

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  character.src = "../assets/img/2_character_pepe/1_idle/idle/I-1.png";
}

console.log(character);
