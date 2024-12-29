class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  gameOver = false;
  camera_x = 0;
  statusBar = new Statusbar();
  statusBarBoss = new StatusbarBoss(this);
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
      this.ifCharacterUnderGround();
      this.deleteEnemyFromGame();
      this.checkGameOver();
    }, 100);
  }

  ifCharacterUnderGround() {
    if (this.character.y > 173) {
      this.character.y = 173;
    }
  }

  checkThrowObjeks() {
    if (this.keyboard.D && this.character.salsaBottle > 0) {
      let bottleX = this.character.otherDirection
        ? this.character.x - 25
        : this.character.x + 100;
      let bottle = new ThrowableObject(
        bottleX,
        this.character.y + 100,
        this.character.otherDirection
      );

      this.throwableObjekts.push(bottle);
      this.character.salsaBottle--;
    }
  }

  deleteEnemyFromGame() {
    this.level.enemies.forEach((enemy, enemyIndex) => {
      if (enemy.isKilled) {
        this.level.enemies.splice(enemyIndex, 1);
      }
    });
  }

  checkGameOver() {
    this.level.enemies.forEach((enemy) => {
      if (enemy instanceof Endboss && enemy.isDead() && !this.gameOver) {
        this.gameOver = true;
      }
      if (this.gameOver) {
        console.log("Game Over");
      }
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isAboveGround() &&
        !enemy.isKilled &&
        enemy.DamageMode
      ) {
        console.log("kolliediert", enemy);
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log(this.character.energy);
      }
      if (this.character.isCollidingFromTop(enemy) && this.character.y <= 155) {
        if (enemy instanceof Chicken || (SmallChicken && !enemy.isDead())) {
          enemy.hitEnemy();
          enemy.DamageMode = false;
          enemy.chicken_isKilled_sound.play();
          this.character.speedY = 20;

          setTimeout(() => {
            enemy.isKilled = true;
          }, 1200);
        }
        console.log("kolliediert oben", enemy.energy);
      }
    });

    this.throwableObjekts.forEach((bottle) => {
      this.level.enemies.forEach((enemy) => {
        if (bottle.isColliding(enemy) || bottle.isCollidingFromTop(enemy)) {
          if (enemy instanceof Chicken || (SmallChicken && !enemy.isDead())) {
            enemy.hitEnemy();
            enemy.DamageMode = false;
            enemy.chicken_isKilled_sound.play();
            setTimeout(() => {
              enemy.isKilled = true;
            }, 1500);
          } else {
            enemy.hit();
          }

          console.log("Bottle hit enemy!", enemy);
        }
      });
    });
  }

  checkCollections() {
    this.checkCoinCollection();
    this.checkBottleCollection();
  }

  checkCoinCollection() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        console.log("kolliediert", coin);
        this.character.coin += 1;

        coin.isCollect = true;
        coin.collect_coin_sound.play();
        console.log(coin);
        this.level.coins.splice(index, 1);
      }
    });
  }

  checkBottleCollection() {
    this.level.salsaBottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        console.log("kolliediert", bottle);
        this.character.salsaBottle += 1;
        bottle.isCollect = true;
        bottle.open_bottle_sound.play();
        console.log("salsabottles: ", this.character.salsaBottle);
        this.level.salsaBottles.splice(index, 1);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.ctx.translate(this.camera_x, 0);
    this.addObjektToMap(this.level.backgroundObjekts);

    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarBoss);

    this.ctx.translate(this.camera_x, 0);



    this.addToMap(this.character);
    this.addObjektToMap(this.level.clouds);

    this.addObjektToMap(this.level.coins);
    this.addObjektToMap(this.level.drawObjects);
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
      } else if (o.hasOwnProperty("isKilled") && !o instanceof Endboss) {
        if (!o.isKilled) {
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
