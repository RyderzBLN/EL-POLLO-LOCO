/**
 * Class representing a coin.
 * @extends DrawableObejekt
 */
class Coin extends DrawableObejekt {
  height = 110;
  width = 110;

  Images = [
    "../assets/img/8_coin/coin_1.png",
    "../assets/img/8_coin/coin_2.png",
  ];

  image = [];

  collect_coin_sound = new Audio("../assets/audio/collect_coin.mp3");
  coinInterval = [];

  /**
   * Create a coin.
   * @param {Object} sounds - The sounds object.
   */
  constructor(sounds) {
    super();
    this.sounds = sounds;
    this.loadImage("../assets/img/8_coin/coin_1.png");
    this.loadImages(this.Images);
    this.animate();

    this.isCollect = false;
    this.oneTimeCollect = false;
    this.x = Math.random() * 7000 ;
    this.y = Math.random() * 300 + 50;
    this.yDirection = 1;

    setTimeout(() => {
      this.coinInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  /**
   * Animate the coin.
   */
  animate() {
    let animateInterval = setInterval(() => {
      this.y += this.yDirection * 2;
      if (this.y >= 204) {
        this.yDirection = -0.3;
      } else if (this.y <= 200) {
        this.yDirection = 0.3;
      }
    }, 125);
    this.coinInterval.push(animateInterval);
  }

  /**
   * Play the collect animation for the coin.
   * @param {Object} character - The character object.
   */
  collectAnimation(character) {
    sounds.collectCoinSound();
    let collectAnimationInterval = setInterval(() => {
      this.y -= 4.5;
      this.x -= 9.5;
      this.width -= 0.8;
      this.height -= 0.75;
      if (this.width <= 0 || this.height <= 0) {
        clearInterval(collectAnimationInterval);
        this.isCollect = true;
      }
    }, 15);
    this.coinInterval.push(collectAnimationInterval);
  }

  /**
   * Ensure the coin does not go too high.
   */
  notToHeight() {
    if (this.y > 85) {
      this.y + (Math.random() * 10 + 20);
    }
  }

  /**
   * Reset the coin's position and state.
   */
  reset() {
    this.x = Math.random() * 4500 + Math.random() + Math.random() + Math.random() * 100;
    this.y = Math.random() * 300 + 50;
    this.isCollect = false;
    this.oneTimeCollect = false;
  }
}