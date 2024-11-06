class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );


    this.enemies.forEach(enemy => {
      this.ctx.drawImage(
        enemy.img,   
        enemy.x,
        enemy.y,
        enemy.width,
        enemy.height
      );
    });
    

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  //   drawE() {
  //     for (let i = 0; i < this.enemies.length; i++) {
  //         let enemy = this.enemies[i];
  //         enemy.y -= 50
  //         enemy.x += 100
  //         this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
  //     }
  // }
}
