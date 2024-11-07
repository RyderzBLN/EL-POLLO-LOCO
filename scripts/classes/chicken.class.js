class Chicken extends MovableObjekt {
  height = 80;
  width = 70;
  y = 347;

  ImagesIdle = [
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super();
    this.loadImage(
      "../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png" );
    this.loadImages(this.ImagesIdle);
    this.animate();

    this.x = 200 + Math.random() * 500;
    this.speed += Math.random() * 0.5;
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let i = this.currentImage % this.ImagesIdle.length;
      let path = this.ImagesIdle[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 95);
  }
}
