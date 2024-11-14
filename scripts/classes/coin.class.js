class Coin extends MovableObjekt {
  Images = [
    "../assets/img/8_coin/coin_1.png",
    "../assets/img/8_coin/coin_2.png",
  ];

  constructor() {
    super();
    this.loadImage("../assets/img/8_coin/coin_1.png");
    this.loadImages(this.Images)
    this.animate();



    this.x = 200 + Math.random() * 500;
  }

  animate(){
    setInterval(() => {
        this.playAnimation(this.Images)
            }, 650);
          }
  }

