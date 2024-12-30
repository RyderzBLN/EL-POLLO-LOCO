class Coin extends DrawableObejekt {
  Images = [
    "../assets/img/8_coin/coin_1.png",
    "../assets/img/8_coin/coin_2.png",

  ];

  collect_coin_sound = new Audio("../assets/audio/collect_coin.mp3");

  constructor() {
    super();
    this.loadImage("../assets/img/8_coin/coin_1.png");
    this.loadImages(this.Images);
    this.animate();

    this.isCollect = false;
    this.x = 200 + Math.random() * 500;
    this.y = 200; 
    this.yDirection = 1; 
  }

  animate() {
    setInterval(() => {
      this.y += this.yDirection * 2; 
      if (this.y >= 204) {
        this.yDirection = -1; 
      } else if (this.y <= 200) {
        this.yDirection = 1; 
      }
    }, 100); 
  }

  collectAnimation(character) {
    this.collect_coin_sound.play();
    let interval = setInterval(() => {
      this.y -= 4.5; 
      this.x -= 9.5;
      this.width -= 0.8; 
      this.height -= 0.75; 
      if (this.width <= 0 || this.height <= 0) {
        clearInterval(interval); 
        this.isCollect = true;
      }
    }, 35); 
  }
}