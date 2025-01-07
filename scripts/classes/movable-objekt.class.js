/**
 * Represents a movable object in the game.
 * @extends DrawableObejekt
 */
class MovableObjekt extends DrawableObejekt {
  /** @type {number} */
  speed = 0.3;
  /** @type {boolean} */
  otherDirection = false;
  /** @type {number} */
  speedY = 0;
  /** @type {number} */
  acceleration = 1.6;
  /** @type {number} */
  energy = 100;
  /** @type {boolean} */
  isKilled = false;
  /** @type {boolean} */
  move = false;
  /** @type {number} */
  lasthit = 0;
  /** @type {boolean} */
  DamageMode = true;

  /**
   * Applies gravity to the object.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 30);
  }

  /**
   * Applies gravity to the boss object.
   */
  applyGravityBoss() {
    setInterval(() => {
      if (this.isAboveGroundBoss() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 40);
  }

  /**
   * Checks if the object is colliding with another object.
   * @param {Object} mo - The other object.
   * @returns {boolean} - True if colliding, false otherwise.
   */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  /**
   * Checks if the object is colliding with another object from the top.
   * @param {Object} mo - The other object.
   * @returns {boolean} - True if colliding from the top, false otherwise.
   */
  isCollidingFromTop(mo) {
    return this.isColliding(mo) && this.world.character.isAboveGround() - 110;
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} - True if above ground, false otherwise.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 173;
    }
  }

  /**
   * Checks if the boss object is above the ground.
   * @returns {boolean} - True if above ground, false otherwise.
   */
  isAboveGroundBoss() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 60;
    }
  }

  /**
   * Plays an animation for the object.
   * @param {Array} images - The images for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  /**
   * Reduces the energy of the object when hit.
   */
  hit() {
    this.energy -= (17 + (Math.random() * 10));
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lasthit = new Date().getTime();
    }
  }

  /**
   * Sets the energy of the object to 0 when hit by an enemy.
   */
  hitEnemy() {
    this.energy = 0;
  }

  /**
   * Reduces the energy of the object when hit by the boss.
   */
  hitFromBoss() {
    this.energy -= 30;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lasthit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is hurt.
   * @returns {boolean} - True if hurt, false otherwise.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lasthit;
    timePassed = timePassed / 1000;
    return timePassed <= 1;
  }

  /**
   * Checks if the object is dead.
   * @returns {boolean} - True if dead, false otherwise.
   */
  isDead() {
    return this.energy <= 0;
  }

  /**
   * Moves the object to the right.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Makes the object jump.
   */
  jump() {
    this.speedY += 24;
  }
}
