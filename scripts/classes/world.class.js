class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new Statusbar();
  throwableObjekts = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjeks();
      this.checkCollections();
    }, 200);
  }

  checkThrowObjeks() {
    if (this.keyboard.D && this.character.salsaBottle > 0) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );

      this.throwableObjekts.push(bottle);
      this.character.salsaBottle--;
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        console.log("kolliediert", enemy);
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log(this.character.energy);
      }
    });
  }

  checkCollections() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        console.log("kolliediert", coin);
        this.character.coin += 1;
        coin.isCollect = true;
        console.log(coin);
        this.level.coins.splice(index, 1)
      }
    });
    this.level.salsaBottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        console.log("kolliediert", bottle);
        this.character.salsaBottle += 1;
        bottle.isCollect = true;
        console.log(this.character.salsaBottle);
        this.level.salsaBottles.splice(index, 1)
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.ctx.translate(this.camera_x, 0);
    this.addObjektToMap(this.level.backgroundObjekts);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjektToMap(this.level.clouds);

    this.addObjektToMap(this.level.coins);
    this.addObjektToMap(this.level.salsaBottles);
    this.addObjektToMap(this.level.enemies);

    this.addObjektToMap(this.throwableObjekts);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjektToMap(objects) {
    objects.forEach((o) => {
      if (o.hasOwnProperty("isCollect")) {
        if (!o.isCollect) {
          this.addToMap(o);
        }
      } else {
        this.addToMap(o);
      }
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawBorder(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
