class SmallChicken extends MovableObjekt {
  height = 60;
  width = 50;
  y = 367;

  ImagesIdle = [
    "../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "../assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "../assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  Image_Dead = [
    "../assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png",
  ];

  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");
  smallChickenInterval = [];

  constructor() {
    super();
    this.loadImage(
      "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Image_Dead);
    this.animate();
    this.energy = 32;
    this.x =
      1000 +
      (Math.random() * 4500 +
        Math.random() +
        Math.random() +
        Math.random() * 100);
    this.speed = (Math.random() + 0.5) * 10;

    setTimeout(() => {
      this.smallChickenInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 3000);
  }

  /**
   * Animates the small chicken by moving it left and playing the idle animation.
   */
  animate() {
    let animateInterval = setInterval(() => {
      if (!this.isDead()) {
        this.moveLeft();
        this.playAnimation(this.ImagesIdle);
      }
      if (this.energy <= 0) {
        this.playAnimation(this.Image_Dead);
      }
    }, 55);
    this.smallChickenInterval.push(animateInterval);
  }

  /**
   * Resets the small chicken's position, energy, and speed.
   */
  reset() {
    this.x =
      1000 +
      (Math.random() * 4500 +
        Math.random() +
        Math.random() +
        Math.random() * 100);
    this.energy = 32;
    this.speed = (Math.random() + 0.5) * 10;
  }
}
