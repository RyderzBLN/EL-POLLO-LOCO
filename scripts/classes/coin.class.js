/**
 * Class representing a coin.
 * @extends DrawableObejekt
 */
class Coin extends DrawableObejekt {
  height = 25;
  width = 20;

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
  constructor(sounds, world) {
    super();
    this.world = world;
    this.sounds = sounds;
    this.loadImage("../assets/img/8_coin/coin_1.png");
    this.loadImages(this.Images);
    this.animate();

    this.isCollect = false;
    this.oneTimeCollect = false;
    this.x = Math.random() * 4500 ;
    this.y = 350 + (Math.random() * (Math.random() * (Math.random() * 30)));
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
        const dx = character.x - this.x;
        const dy = character.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = 20; 

        if (distance < speed) {
            this.x = character.x;
            this.y = character.y;
            clearInterval(collectAnimationInterval);
            this.isCollect = true;
        } else {
            this.x += dx / distance * speed;
            this.y += dy / distance * speed;
        }
    }, 30);
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