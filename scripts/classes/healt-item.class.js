/**
 * Class representing a health item.
 * @extends DrawableObejekt
 */
class HealtItem extends DrawableObejekt {
  width = 70;
  height = 70;

  Image = "../assets/img/7_statusbars/3_icons/icon_health.png";
  healthInterval = [];

  /**
   * Create a health item.
   * @param {Object} sounds - The sounds object.
   */
  constructor(sounds) {
    super();
    this.sounds = sounds;
    this.loadImage(this.Image);

    this.isCollect = false;
    this.oneTimeCollect = false;
    this.x = isSpecial ? 4650 : 1000 + Math.random() * 3500;
    this.y = Math.random() * 300 + 50;
    setTimeout(() => {
      this.healthInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }
}
