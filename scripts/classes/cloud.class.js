class Cloud extends MovableObjekt {
  width = 400;
  height = 200;

  y = 20;
  x = 0 + Math.random() * 500;
  cloudInterval = [];

  constructor() {
    super();
    this.loadImage("../assets/img/5_background/layers/4_clouds/1.png");
    this.animate();
    this.x = 0 + Math.random() * 4500;
    setTimeout(() => {
      this.cloudInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  animate() {
    this.moveLeft();
  }

  moveLeft() {
    let moveLeftInterval = setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
    this.cloudInterval.push(moveLeftInterval);
  }
}
