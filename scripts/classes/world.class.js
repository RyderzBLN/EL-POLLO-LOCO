class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  gameOver = false;
  gameWon = false;
  gameLose = false;
  camera_x = 0;
  statusBar = new Statusbar();
  statusBarBoss = new StatusbarBoss(this);
  statusBarBottle = new StatusbarBottle();
  statusBarCoin = new StatusbarCoin();
  displayBottle = new BottleDisplay(this);
  throwableObjekts = [];
  explosions = [];
  specialAttack = false;
  intervalIds = [];
  worldInterval = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();

    setTimeout(() => {
      this.worldInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    let runInterval = setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjeks();
      this.checkCollections();
      this.ifCharacterUnderGround();
      this.deleteEnemyFromGame();
      this.checkGameOver();
      this.displayGameOverScreen();
      sounds.startThemeSound();
    }, 100);
    this.worldInterval.push(runInterval);
  }

  ifCharacterUnderGround() {
    if (this.character.y > 173) {
      this.character.y = 173;
    }
  }

  checkThrowObjeks() {
    if (this.canThrowBottle()) {
      let bottle = this.createThrowableObject();
      this.throwableObjekts.push(bottle);
      this.bottleRemoveProcess(bottle);
      if (this.canThrowSpecialAttack()) {
        this.triggerSpecialAttack();
      }
    }
  }

  createThrowableObject() {
    let bottleX = this.character.otherDirection
      ? this.character.x - 25
      : this.character.x + 100;
    return new ThrowableObject(
      bottleX,
      this.character.y + 100,
      this.character.otherDirection
    );
  }

  canThrowBottle() {
    return (
      this.keyboard.D &&
      this.character.salsaBottle > 0 &&
      !this.character.isDead()
    );
  }

  canThrowSpecialAttack() {
    return (
      !this.character.otherDirection &&
      this.character.salsaBottle >= 10 &&
      this.character.coin >= 10 &&
      !this.character.isDead()
    );
  }

  bottleRemoveProcess(bottle) {
    this.character.salsaBottle--;
    setTimeout(() => {
      this.throwableObjekts.pop(bottle);
      this.statusBarBottle.setPercentage(this.character.salsaBottle);
    }, 1000);
  }

  triggerSpecialAttack() {
    this.character.coin -= 10;
    this.character.salsaBottle -= 10;
    setTimeout(() => {
      let explosion = new ExplosionAttack(this.character, this.sounds);
      this.explosions.push(explosion);
      this.specialAttack = false;
      setTimeout(() => {
        this.explosions.pop(explosion);
      }, 1000);
    }, 800);
  }

  deleteEnemyFromGame() {
    this.level.enemies.forEach((enemy, enemyIndex) => {
      if (enemy.isKilled) {
        this.removeElementFromArray(this.level.enemies, enemyIndex);
      }
    });
  }

  checkGameOver() {
    this.level.endboss.forEach((boss) => {
      if (boss.isDead() && !this.gameOver) {
        this.gameOver = true;
        this.gameWon = true;
      }

      if (this.character.isDead()) {
        this.gameOver = true;
        this.gameLose = true;
      }
    }, 100);
  }

  displayGameOverScreen() {
    if (this.gameOver && this.gameWon) {
      this.playerHasWon();
    }
    if (this.gameOver && this.gameLose) {
      this.enemyHasWon();
    }
  }

  playerHasWon() {
    if (this.gameOver && this.gameWon) {
      const gameOverScreen = document.getElementById("gameover-screen");
      gameOverScreen.style.display = "flex";
      setTimeout(() => gameOverScreen.classList.add("addOpacity"), 300);
      setTimeout(() => this.clearAllIntervals(), 1200);
    }
  }

  enemyHasWon() {
    if (this.gameOver && !this.gameWon) {
      const gameOverScreen = document.getElementById("gameover-screen");
      gameOverScreen.style.display = "flex";
      gameOverScreen.style.background =
        "url(./assets/img/9_intro_outro_screens/game_over/game-over.png) center/cover no-repeat";

      setTimeout(() => gameOverScreen.classList.add("addOpacity"), 300);
      setTimeout(() => this.clearAllIntervals(), 1200);
    }
  }

  checkCollisions() {
    this.checkEnemyCollisionAbove();
    this.checkEnemyCollision();
    this.checkBottleHitEnemy();
    this.checkBottleHitBoss();
    this.checkExplosionHitEnemy();
    this.checkExplosionHitBoss();
  }

  checkEnemyCollisionAbove() {
    this.level.enemies.forEach((enemy) => {
      if (this.enemyIsHitedfromTop(enemy)) {
        this.enemyIsKilledProcess(enemy);
        this.character.speedY = 20;

        setTimeout(() => {
          enemy.isKilled = true;
        }, 1200);
      }
    });
  }

  enemyIsHitedfromTop(enemy) {
    return (
      this.character.isCollidingFromTop(enemy) &&
      this.character.y <= 155 &&
      !enemy.isDead()
    );
  }

  enemyIsKilledProcess(enemy) {
    enemy.hitEnemy();
    enemy.DamageMode = false;
    sounds.enemyKillSound();
  }

  checkEnemyCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.charIsHited(enemy)) {
        this.characterHitedProcess();
        console.log(this.character.energy);
      }
    });
  }

  charIsHited(enemy) {
    return (
      this.character.isColliding(enemy) &&
      !this.character.isAboveGround() &&
      !enemy.isKilled &&
      enemy.DamageMode &&
      !this.character.invulnerableMode
    );
  }

  characterHitedProcess() {
    this.character.hit();
    this.statusBar.setPercentage(this.character.energy);
  }

  checkBottleHitEnemy() {
    this.throwableObjekts.forEach((bottle) => {
      this.level.enemies.forEach((enemy) => {
        if (this.enemyIsHited(bottle, enemy)) {
          this.enemyIsKilledProcess(enemy);

          setTimeout(() => {
            enemy.isKilled = true;
          }, 1500);
        }
      });
    });
  }

  enemyIsHited(bottle, enemy) {
    return (
      bottle.isColliding(enemy) ||
      (bottle.isCollidingFromTop(enemy) && !enemy.isDead())
    );
  }

  checkExplosionHitEnemy() {
    this.explosions.forEach((explosion) => {
      this.level.enemies.forEach((enemy) => {
        if (this.enemyIsHited(explosion, enemy)) {
          this.enemyIsKilledProcess(enemy);
          setTimeout(() => {
            enemy.isKilled = true;
          }, 1500);
        }
      });
    });
  }

  checkExplosionHitBoss() {
    this.explosions.forEach((explosion) => {
      this.level.endboss.forEach((boss) => {
        if (this.enemyIsHited(explosion, boss)) {
          boss.hit();
          boss.hit();
          this.statusBarBoss.setPercentage(boss.energy);
        }
      });
    });
  }

  checkBottleHitBoss() {
    this.throwableObjekts.forEach((bottle) => {
      this.level.endboss.forEach((boss) => {
        if (this.enemyIsHited(bottle, boss)) {
          boss.hit();
          this.statusBarBoss.setPercentage(boss.energy);
          console.log("Bottle hit endboss!", boss);
        }
      });
    });
  }

  checkCollections() {
    this.checkCoinCollection();
    this.checkBottleCollection();
    this.checkHealthCollection();
  }

  checkHealthCollection() {
    this.level.health.forEach((health, index) => {
      if (this.character.isColliding(health)) {
        this.character.energy += 25;
        this.statusBar.setPercentage(this.character.energy);
        this.removeElementFromArray(this.level.health, index);
        console.log("health: ", this.character.energy);
        
      }
    });
  }

  checkCoinCollection() {
    this.level.coins.forEach((coin, index) => {
      if (
        this.character.isColliding(coin) &&
        !coin.isCollect &&
        !coin.oneTimeCollect
      ) {
        this.coinCollectProcess(coin);

        setTimeout(() => {
          this.removeElementFromArray(this.level.coins, index);
          coin.isCollect = true;
        }, 900);
      }
    });
  }

  coinCollectProcess(coin) {
    this.character.coin += 1;
    coin.oneTimeCollect = true;
    this.statusBarCoin.setPercentage(this.character.coin);
    coin.collectAnimation(this.character);
  }

  checkBottleCollection() {
    this.level.salsaBottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.bottleCollectProcess(bottle);
        console.log("salsabottles: ", this.character.salsaBottle);
        this.removeElementFromArray(this.level.salsaBottles, index);
      }
    });
  }

  removeElementFromArray(array, index) {
    array.splice(index, 1);
  }

  bottleCollectProcess(bottle) {
    this.character.salsaBottle += 1;
    this.statusBarBottle.setPercentage(this.character.salsaBottle);
    bottle.isCollect = true;
    sounds.openBottleSound();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.ctx.translate(this.camera_x, 0);
    this.addObjektToMap(this.level.backgroundObjekts);
    this.addToMap(this.statusBarBoss);
    this.addToMap(this.character);
    this.addObjektToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.displayBottle);
    this.ctx.translate(this.camera_x, 0);
    this.addObjektToMap(this.level.coins);
    this.addObjektToMap(this.level.health);
    this.addObjektToMap(this.level.drawObjects);
    this.addObjektToMap(this.level.salsaBottles);
    this.addObjektToMap(this.level.enemies);
    this.addObjektToMap(this.level.endboss);
    this.addObjektToMap(this.throwableObjekts);
    this.addObjektToMap(this.explosions);
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

  clearAllIntervals() {
    intervalIds.forEach((id) => clearInterval(id));
    intervalIds = [];
  }
}
