/**
 * Class representing a background object.
 * @extends MovableObjekt
 */
class BackgroundObjekt extends MovableObjekt {
   width = 720;
   height = 480;

   /**
    * Create a background object.
    * @param {string} imagePath - The path to the image.
    * @param {number} x - The x-coordinate of the background object.
    * @param {number} y - The y-coordinate of the background object.
    */
   constructor(imagePath, x, y) {
      super();
      this.loadImage(imagePath);
      this.x = x;
      this.y = 480 - this.height;
   }
}