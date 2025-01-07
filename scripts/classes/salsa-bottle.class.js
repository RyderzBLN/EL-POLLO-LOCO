/**
 * Represents a salsa bottle in the game.
 * @extends MovableObjekt
 */
class SalsaBottle extends MovableObjekt {
  /** @type {number} */
  height = 60;
  /** @type {number} */
  width = 50;
  /** @type {boolean} */
  isCollect = false;

  /**
   * Creates an instance of SalsaBottle.
   */
  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.isCollect = false;
    this.x = Math.random() * 4500;
    this.y = 358 + (Math.random() * 30);
    this.otherDirection = Math.random() < 0.5;
  }

  /**
   * Resets the salsa bottle to its initial state.
   */
  reset() {
    this.isCollect = false;
    this.x = this.getNextBottlePosition();
  }
}