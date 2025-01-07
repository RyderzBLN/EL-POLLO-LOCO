/**
 * Represents the status bar for the boss in the game.
 * @extends Statusbar
 */
class StatusbarBoss extends Statusbar {
  /** @type {Array<string>} */
  IMAGES = [
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
  ];

  /** @type {number} */
  percentage = 100;

  /**
   * Creates an instance of StatusbarBoss.
   * @param {Object} world - The game world.
   */
  constructor(world) {
    super();
    this.world = world;
    this.loadImages(this.IMAGES);
    this.y = 45;
    this.width = 150;
    this.height = 50;
    this.setPercentage(100);
  }

  /**
   * Sets the percentage of the boss's status bar.
   * @param {number} percentage - The percentage to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imgCache[path];
  }

  /**
   * Resolves the image index based on the percentage.
   * @returns {number} - The index of the image.
   */
  resolveImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else if (this.percentage >= 0) {
      return 0;
    }
  }

  /**
   * Updates the position of the boss's status bar.
   */
  updatePosition() {
    let endboss = this.world.level.endboss[0];
    if (endboss) {
      this.x = endboss.x;
      this.x += 70;
    }
  }

  /**
   * Draws the boss's status bar.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    this.updatePosition();
    super.draw(ctx);
  }
}
