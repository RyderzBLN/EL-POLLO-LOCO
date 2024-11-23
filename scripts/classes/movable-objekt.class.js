class MovableObjekt extends DrawableObejekt {
  speed = 0.3;

  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;

  isKilled = false;



  lasthit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 40);
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  isCollidingFromTop(mo) {
    return this.isColliding(mo) && this.speedY < 0;
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 173;
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lasthit = new Date().getTime();
    }
  }

  hitEnemy() {
    this.energy -= 33;
    if (this.energy < 0) {
      this.energy = 0;
    }  
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lasthit;
    timePassed = timePassed / 1000;
    return timePassed < 0.75;
  }

  isDead() {
    return this.energy == 0;
  }

  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY += 30;
    if (this.speedY >= 35) {
      this.speedY = 35;
    }
  }
}
