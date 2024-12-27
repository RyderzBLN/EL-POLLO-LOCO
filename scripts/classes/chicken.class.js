class Chicken extends MovableObjekt {
  height = 80;
  width = 70;
  y = 347;

  ImagesIdle = [
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  Image_Dead = [
    "../assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");

  constructor() {
    super();
    this.loadImage(
      "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Image_Dead);
    this.animate();
    this.energy = 32;
    this.x = 500 + Math.random() * 500;
    this.speed += Math.random() * 0.5 
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        this.moveLeft();
        this.playAnimation(this.ImagesIdle);
      }
      if (this.energy <= 0) {
        this.playAnimation(this.Image_Dead);
      }
    }, 95);
  }
}
