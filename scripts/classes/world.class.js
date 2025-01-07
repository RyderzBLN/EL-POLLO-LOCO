class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;

  camera_x = 0;
  statusBar = new Statusbar();
  statusBarBoss = new StatusbarBoss(this);
  statusBarBottle = new StatusbarBottle();
  statusBarCoin = new StatusbarCoin();
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

  /**
   * Sets the world for the character.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Runs the game loop, checking for collisions, throwable objects, collections, and game over conditions.
   */
  run() {
    let runInterval = setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjeks();
      this.checkCollections();
      this.ifCharacterUnderGround();
      this.deleteEnemyFromGame();
      this.checkGameOver();

      this.worldInterval.push(runInterval);
    }, 100);
  }

  /**
   * Ensures the character does not go underground.
   */
  ifCharacterUnderGround() {
    if (this.character.y > 173) {
      this.character.y = 173;
    }
  }

  /**
   * Checks if the character can throw a bottle and handles the process.
   */
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

  /**
   * Creates a throwable object (bottle).
   * @returns {ThrowableObject} The created throwable object.
   */
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

  /**
   * Checks if the character can throw a bottle.
   * @returns {boolean} True if the character can throw a bottle, false otherwise.
   */
  canThrowBottle() {
    return (
      this.keyboard.D &&
      this.character.salsaBottle > 0 &&
      !this.character.isDead()
    );
  }

  /**
   * Checks if the character can perform a special attack.
   * @returns {boolean} True if the character can perform a special attack, false otherwise.
   */
  canThrowSpecialAttack() {
    return (
      !this.character.otherDirection &&
      this.character.salsaBottle >= 10 &&
      this.character.coin == 25 &&
      !this.character.isDead()
    );
  }

  /**
   * Handles the process of removing a bottle after it is thrown.
   * @param {ThrowableObject} bottle - The bottle to be removed.
   */
  bottleRemoveProcess(bottle) {
    this.character.salsaBottle--;
    setTimeout(() => {
      this.throwableObjekts.pop(bottle);
      this.statusBarBottle.setPercentage(this.character.salsaBottle);
    }, 1000);
  }

  /**
   * Triggers a special attack.
   */
  triggerSpecialAttack() {
    this.character.coin -= 25;
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

  /**
   * Deletes enemies from the game if they are killed.
   */
  deleteEnemyFromGame() {
    this.level.enemies.forEach((enemy, enemyIndex) => {
      if (enemy.isKilled) {
        this.removeElementFromArray(this.level.enemies, enemyIndex);
      }
    });
  }

  /**
   * Checks if the game is over and handles the game over conditions.
   */
  checkGameOver() {
    this.level.endboss.forEach((boss) => {
      if (boss.isDead()) {
        gameWon = true;
        this.character.invulnerableMode = true;
      } 
      if (this.character.isDead()) {
        gameLose = true;
      }
      if (gameWon || gameLose) {
        gameOver = true;
      }
      this.displayGameOverScreen();
    });
  }

  /**
   * Resets the game state.
   */
  resetGame() {
    this.character.energy = 100;
    this.level.endboss.forEach((boss) => {
      boss.energy = 100;
    });
    gameLose = false;
    gameWon = false;
    gameOver = false;
  }

  /**
   * Displays the game over screen based on the game outcome.
   */
  displayGameOverScreen() {
    if (gameOver && gameWon && !gameLose) {
      this.playerHasWon();
      sounds.gameWinSound();
    }
    if (gameOver && gameLose && !gameWon) {
      this.enemyHasWon();
      sounds.gameIsOverSound();
    }
  }

  /**
   * Displays the screen when the player has won.
   */
  playerHasWon() {
    const gameOverScreen = document.getElementById("gameover-screen");
    gameOverScreen.style.display = "flex";
    setTimeout(() => gameOverScreen.classList.add("addOpacity"), 300);
  }

  /**
   * Displays the screen when the enemy has won.
   */
  enemyHasWon() {
    const gameOverScreen = document.getElementById("gameover-screen");
    gameOverScreen.style.display = "flex";
    gameOverScreen.style.background =
      "url(./assets/img/9_intro_outro_screens/game_over/game-over.png) center/cover no-repeat";

    setTimeout(() => gameOverScreen.classList.add("addOpacity"), 300);
  }

  /**
   * Checks for various types of collisions in the game.
   */
  checkCollisions() {
    this.checkEnemyCollisionAbove();
    this.checkEnemyCollision();
    this.checkBottleHitEnemy();
    this.checkBottleHitBoss();
    this.checkExplosionHitEnemy();
    this.checkExplosionHitBoss();
  }

  /**
   * Checks if the character collides with an enemy from above.
   */
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

  /**
   * Checks if an enemy is hit from the top by the character.
   * @param {Enemy} enemy - The enemy to check.
   * @returns {boolean} True if the enemy is hit from the top, false otherwise.
   */
  enemyIsHitedfromTop(enemy) {
    return (
      this.character.isCollidingFromTop(enemy) &&
      this.character.y <= 155 &&
      !enemy.isDead()
    );
  }

  /**
   * Handles the process when an enemy is killed.
   * @param {Enemy} enemy - The enemy that is killed.
   */
  enemyIsKilledProcess(enemy) {
    enemy.hitEnemy();
    enemy.DamageMode = false;
    sounds.enemyKillSound();
  }

  /**
   * Checks if the character collides with an enemy.
   */
  checkEnemyCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.charIsHited(enemy)) {
        this.characterHitedProcess();
      }
    });
  }

  /**
   * Checks if the character is hit by an enemy.
   * @param {Enemy} enemy - The enemy to check.
   * @returns {boolean} True if the character is hit by the enemy, false otherwise.
   */
  charIsHited(enemy) {
    return (
      this.character.isColliding(enemy) &&
      !this.character.isAboveGround() &&
      !enemy.isKilled &&
      enemy.DamageMode &&
      !this.character.invulnerableMode
    );
  }

  /**
   * Handles the process when the character is hit.
   */
  characterHitedProcess() {
    this.character.hit();
    this.statusBar.setPercentage(this.character.energy);
    sounds.thisHurts();
  }

  /**
   * Checks if a bottle hits an enemy.
   */
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

  /**
   * Checks if an enemy is hit by a bottle.
   * @param {ThrowableObject} bottle - The bottle to check.
   * @param {Enemy} enemy - The enemy to check.
   * @returns {boolean} True if the enemy is hit by the bottle, false otherwise.
   */
  enemyIsHited(bottle, enemy) {
    return (
      bottle.isColliding(enemy) ||
      (bottle.isCollidingFromTop(enemy) && !enemy.isDead())
    );
  }

  /**
   * Checks if an explosion hits an enemy.
   */
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

  /**
   * Checks if an explosion hits the boss.
   */
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

  /**
   * Checks if a bottle hits the boss.
   */
  checkBottleHitBoss() {
    this.throwableObjekts.forEach((bottle) => {
      this.level.endboss.forEach((boss) => {
        if (this.enemyIsHited(bottle, boss)) {
          boss.hitsBoss();
          this.statusBarBoss.setPercentage(boss.energy);
        }
      });
    });
  }

  /**
   * Checks for various types of collections in the game.
   */
  checkCollections() {
    this.checkCoinCollection();
    this.checkBottleCollection();
    this.checkHealthCollection();
  }

  /**
   * Checks if the character collects a health item.
   */
  checkHealthCollection() {
    this.level.health.forEach((health, index) => {
      if (this.character.isColliding(health)) {
        this.character.energy += 40;
        sounds.collectHeartSound();
        this.statusBar.setPercentage(this.character.energy);
        this.removeElementFromArray(this.level.health, index);
      }
    });
  }

  /**
   * Checks if the character collects a coin.
   */
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

  /**
   * Handles the process when a coin is collected.
   * @param {Coin} coin - The coin that is collected.
   */
  coinCollectProcess(coin) {
    this.character.coin += 1;
    coin.oneTimeCollect = true;
    this.statusBarCoin.setPercentage(this.character.coin);
    coin.collectAnimation(this.character);
  }

  /**
   * Checks if the character collects a bottle.
   */
  checkBottleCollection() {
    this.level.salsaBottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.bottleCollectProcess(bottle);
        this.removeElementFromArray(this.level.salsaBottles, index);
      }
    });
  }

  /**
   * Removes an element from an array.
   * @param {Array} array - The array to remove the element from.
   * @param {number} index - The index of the element to remove.
   */
  removeElementFromArray(array, index) {
    array.splice(index, 1);
  }

  /**
   * Handles the process when a bottle is collected.
   * @param {Bottle} bottle - The bottle that is collected.
   */
  bottleCollectProcess(bottle) {
    this.character.salsaBottle += 1;
    this.statusBarBottle.setPercentage(this.character.salsaBottle);
    bottle.isCollect = true;
    sounds.openBottleSound();
  }

  /**
   * Draws the game elements on the canvas.
   */
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

  /**
   * Adds objects to the map.
   * @param {Array} objects - The objects to add to the map.
   */
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

  /**
   * Adds an object to the map.
   * @param {MovableObject} mo - The object to add to the map.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Flips an image horizontally.
   * @param {MovableObject} mo - The object to flip.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Flips an image back to its original orientation.
   * @param {MovableObject} mo - The object to flip back.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
