let canvas;
let world;
let keyboard = new Keyboard();
let sounds;
let gameOver = false;
let gameWon = false;
let gameLose = false;

let intervalIds = [];

function init() {
  intervalIds = [];
  initLevel();
  disableStartElements();

  setTimeout(() => {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    sounds = new Sounds(world);
    initLevel();
  }, 2200);
}

function restartGame() {
clearAllIntervals();


  setTimeout(() => {
    const gameOverScreen = document.getElementById("gameover-screen");
    gameOverScreen.style.display = "none";
    gameOverScreen.classList.remove("addOpacity");
    
  }, 2200);

  setTimeout(() => {
    world.resetGame();
    
  }, 2150);
  init();


}


// maybe noch brauchbar
function clearAllIntervals() {
  for (let i = 1; i < 99999; i++) {
    window.clearInterval(i);
  }
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

window.addEventListener("load", () => {
  document.getElementById("walk-left").addEventListener("touchstart", () => {
    keyboard.LEFT = true;
  });
  document.getElementById("walk-left").addEventListener("touchend", () => {
    keyboard.LEFT = false;
  });

  document.getElementById("walk-right").addEventListener("touchstart", () => {
    keyboard.RIGHT = true;
  });
  document.getElementById("walk-right").addEventListener("touchend", () => {
    keyboard.RIGHT = false;
  });

  document.getElementById("throw").addEventListener("touchstart", () => {
    keyboard.D = true;
  });
  document.getElementById("throw").addEventListener("touchend", () => {
    keyboard.D = false;
  });

  document.getElementById("jump").addEventListener("touchstart", () => {
    keyboard.SPACE = true;
  });
  document.getElementById("jump").addEventListener("touchend", () => {
    keyboard.SPACE = false;
  });
});
