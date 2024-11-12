class MovableObjekt {
  x = 100;
  y = 280;
  height = 150;
  width = 100;
  speed = 0.3;
  img;
  currentImage = 0;
  imgCache = {};
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;


  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
      this.y -= this.speedY;
      this.speedY -= this.acceleration;
      }
    }, 1000 / 25)
  }


  isAboveGround(){
    return this.y < 173;
  }

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

  playAnimation(images) {
    let i = this.currentImage % this.ImagesIdle.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
    

  }
  moveLeft() {

      this.x -= this.speed;
      
  }

  jump(){
    this.speedY += 30;
  }
}
