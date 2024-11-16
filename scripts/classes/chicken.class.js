class Chicken extends MovableObjekt {
  height = 80;
  width = 70;
  y = 347;

  ImagesIdle = [
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");


  constructor() {
    super();
    this.loadImage(
      "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.ImagesIdle);
    this.animate();

    this.x = 200 + Math.random() * 500;
    this.speed += Math.random() * 0.5;
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
this.playAnimation(this.ImagesIdle)
    }, 95);
  }
}
