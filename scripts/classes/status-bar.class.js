/**
 * Represents a status bar in the game.
 * @extends DrawableObejekt
 */
class Statusbar extends DrawableObejekt {
  /** @type {Array<string>} */
  IMAGES = [
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "../assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  /** @type {number} */
  percentage = 100;

  /**
   * Creates an instance of Statusbar.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 15;
    this.width = 150;
    this.height = 50;
    this.setPercentage(100);
  }

  /**
   * Sets the percentage of the status bar.
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
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else if (this.percentage >= 1) {
      return 1;
    } else if (this.percentage <= 0) {
      return 0;
    }
  }
}
