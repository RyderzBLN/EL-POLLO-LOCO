class MovableObjekt {
  x = 100;
  y = 280;
  height = 150;
  width = 100;
  img;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft() {
    console.log("move left");
  }
}
