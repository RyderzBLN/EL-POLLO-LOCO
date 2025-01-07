/**
 * Represents the status bar for the coins in the game.
 * @extends Statusbar
 */
class StatusbarCoin extends Statusbar {
  /** @type {Array<string>} */
  IMAGES = [
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  /** @type {number} */
  percentage = 0;

  /**
   * Creates an instance of StatusbarCoin.
   * @param {Object} world - The game world.
   */
  constructor(world) {
    super();
    this.world = world;
    this.loadImages(this.IMAGES);
    this.y = 105;
    this.x = 20;
    this.width = 150;
    this.height = 50;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage of the coin status bar.
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
    if (this.percentage >= 10) {
      return 5;
    } else if (this.percentage >= 7) {
      return 4;
    } else if (this.percentage >= 5) {
      return 3;
    } else if (this.percentage >= 3) {
      return 2;
    } else if (this.percentage >= 1) {
      return 1;
    } else if (this.percentage >= 0) {
      return 0;
    }
  }
}
