let canvas;
let world;

function init() {
  canvas = document.getElementById("canvas");
  console.log(canvas);

  world = new World(canvas);
}
