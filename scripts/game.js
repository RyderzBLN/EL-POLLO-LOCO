let canvas;
let world;
let keyboard = new Keyboard();
let sounds;
let lastFrameTime = 0;

function init() {
  disableStartElements();

  setTimeout(() => {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    sounds = new Sounds(world);
  }, 2200);

}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

window.addEventListener('load', () => {
  document.getElementById('walk-left').addEventListener('touchstart', () => {
    keyboard.LEFT = true;
  });
  document.getElementById('walk-left').addEventListener('touchend', () => {
    keyboard.LEFT = false;
  });

  document.getElementById('walk-right').addEventListener('touchstart', () => {
    keyboard.RIGHT = true;
  });
  document.getElementById('walk-right').addEventListener('touchend', () => {
    keyboard.RIGHT = false;
  });

  document.getElementById('throw').addEventListener('touchstart', () => {
    keyboard.D = true;
  });
  document.getElementById('throw').addEventListener('touchend', () => {
    keyboard.D = false;
  });

  document.getElementById('jump').addEventListener('touchstart', () => {
    keyboard.SPACE = true;
  });
  document.getElementById('jump').addEventListener('touchend', () => {
    keyboard.SPACE = false;
  });
});