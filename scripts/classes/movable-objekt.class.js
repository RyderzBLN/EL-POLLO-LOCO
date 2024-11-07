class MovableObjekt {
  x = 100;
  y = 280;
  height = 150;
  width = 100;
  speed = 0.3;
  img;
  currentImage = 0;
  imgCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveRight() {
    console.log("move right");
  }
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
