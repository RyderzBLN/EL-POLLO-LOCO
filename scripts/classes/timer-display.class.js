class BonusTimer extends DrawableObejekt {
  Image = "../assets/img/red-timer.png";
  counter = 28;
  counterInterval = [];

  constructor(world) {
    super();
    this.world = world;
    this.loadImage(this.Image);
    this.width = 25;
    this.height = 25;
    this.y = 10;
    this.x = 625;
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
    ctx.fillStyle = "green";
    if (this.counter > 35) {
      ctx.fillStyle = "orange";
    }
    if (this.counter > 45) {
      ctx.fillStyle = "red";
    }
    ctx.fillText(this.counter, this.x + 35, this.y + 21);
  }
}
