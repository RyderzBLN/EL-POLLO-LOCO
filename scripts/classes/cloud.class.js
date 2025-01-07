/**
 * Class representing a cloud.
 * @extends MovableObjekt
 */
class Cloud extends MovableObjekt {
  width = 400;
  height = 200;

  y = 20;
  x = 0 + Math.random() * 500;
  cloudInterval = [];

  /**
   * Create a cloud.
   */
  constructor() {
    super();
    this.loadImage("../assets/img/5_background/layers/4_clouds/1.png");
    this.animate();
    this.x = 0 + Math.random() * 4500;
    setTimeout(() => {
      this.cloudInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  /**
   * Animate the cloud.
   */
  animate() {
    this.moveLeft();
  }

  /**
   * Move the cloud to the left.
   */
  moveLeft() {
    let moveLeftInterval = setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
    this.cloudInterval.push(moveLeftInterval);
  }

  /**
   * Reset the cloud's position.
   */
  reset() {
    this.x = 0 + Math.random() * 4500;
  }
}
