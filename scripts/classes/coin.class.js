class Coin extends MovableObjekt {
  y = 223;
  isCollect = false;
  Images = [
    "../assets/img/8_coin/coin_1.png",
    "../assets/img/8_coin/coin_2.png",
  ];

  collect_coin_sound = new Audio ("../assets/audio/collect_coin.mp3")

  constructor() {
    super();
    this.loadImage("../assets/img/8_coin/coin_1.png");
    this.loadImages(this.Images);
    this.animate();

    this.isCollect = false;
    this.x = 200 + Math.random() * 500;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images);
    }, 650);
  }
}
