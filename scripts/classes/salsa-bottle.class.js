class SalsaBottle extends MovableObjekt {
  y = 280;
  isCollect = false;

  BottleAnimation = [

    "../assets/img/6_salsa_bottle/animationL3.png",
    "../assets/img/6_salsa_bottle/animationL2.png",
    "../assets/img/6_salsa_bottle/animationL1.png",
    "../assets/img/6_salsa_bottle/animationL2.png",
    "../assets/img/6_salsa_bottle/animationL3.png",
    "../assets/img/6_salsa_bottle/salsa_bottle.png",
    "../assets/img/6_salsa_bottle/animationR3.png",
    "../assets/img/6_salsa_bottle/animationR2.png",
    "../assets/img/6_salsa_bottle/animationR1.png",
    "../assets/img/6_salsa_bottle/animationR2.png",
    "../assets/img/6_salsa_bottle/animationR3.png"
  ];

  open_bottle_sound = new Audio("../assets/audio/bottle_open_fluo.mp3");

  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.loadImages(this.BottleAnimation);
    this.isCollect = false;
    this.x = 200 + Math.random() * 500;
    this.SalsaBottleAnimation();
  }

  SalsaBottleAnimation() {
    setInterval(() => {
      this.playAnimation(this.BottleAnimation);
    }, 650);
  }
}
