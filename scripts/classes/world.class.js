class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
 backgroundObjekts = [new BackgroundObjekt("../assets/img/5_background/layers/3_third_layer/1.png")];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

     draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

    this.addToMap(this.character);
    this.addObjektToMap(this.clouds)
    this.addObjektToMap(this.enemies)
    this.addObjektToMap(this.backgroundObjekts)

    let self = this;
    requestAnimationFrame(function() {
      self.draw();
    });
  }

  addObjektToMap(objects){
    objects.forEach(o => {
      this.addToMap(o)
    })
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
  }
