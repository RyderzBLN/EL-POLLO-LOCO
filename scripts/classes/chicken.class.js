/**
 * Class representing a chicken.
 * @extends MovableObjekt
 */
class Chicken extends MovableObjekt {
  height = 80;
  width = 70;
  y = 347;

  ImagesIdle = [
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  Image_Dead = [
    "../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  chickenInterval = [];

  /**
   * Create a chicken.
   * @param {Object} world - The world object.
   */
  constructor(world) {
    super();
    this.world = world;
    this.loadImage(
      "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Image_Dead);
    this.animate();
    this.energy = 32;
    this.x = 400 + (Math.random() * 4500);
    this.speed += Math.random() + 2 * 3; 
    setTimeout(() => {
      this.chickenInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  /**
   * Animate the chicken.
   */
  animate() {
    let chickenAnimation = setInterval(() => {
      if (!this.isDead()) {
        this.moveLeft();
        this.playAnimation(this.ImagesIdle);
      }
      if (this.energy <= 0) {
        this.playAnimation(this.Image_Dead);
      }
    }, 95);
    this.chickenInterval.push(chickenAnimation);  
  }

  /**
   * Reset the chicken's state.
   */
  reset() {
    this.x = 400 + (Math.random() * 5500);
    this.energy = 32;
    this.speed += Math.random() + 2 * 3;
    this.isKilled = false;
    this.DamageMode = true;
  }
}
