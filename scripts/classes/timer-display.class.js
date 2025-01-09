class BonusTimer extends DrawableObejekt {
  Image = "../assets/img/red-timer.png";
  counter = 0;
  counterInterval = [];

  constructor(world) {
    super();
    this.world = world;
    this.loadImage(this.Image);
    this.y = 20;
    this.x = 635;
    this.width = 20;
    this.height = 20;
    this.y = 5;
    this.x = 615;
    this.width = 35;
    this.height = 35;
    this.counterMinus();
  }

  counterMinus() {
    let TimerInterval = setInterval(() => {
      this.counter++;
    }, 1000);
    this.counterInterval.push(TimerInterval);
  }

  draw(ctx) {
    super.draw(ctx);
    this.drawBottleCount(ctx);
  }

  drawBottleCount(ctx) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(this.counter, this.x + 50, this.y + 25);
  }
}
