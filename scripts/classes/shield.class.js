/**
 * Represents a shield in the game.
 * @extends DrawableObejekt
 */
class Shield extends DrawableObejekt {
  /** @type {string} */
  Image = "../assets/img/end.png";

  /**
   * Creates an instance of Shield.
   */
  constructor() {
    super();
    this.loadImage(this.Image);
    this.x = 4500;
    this.y = 270;
    this.height = 150;
    this.width = 140;
  }
}
