class Level {
  enemies;
  endboss;
  coins;
  health;
  salsaBottles;
  drawObjects;
  clouds;
  backgroundObjekts;

  level_end_x = 5300;

  constructor(enemies, endboss, coins, health, salsaBottles, drawObjects, clouds, backgroundObjekts) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.coins = coins;
    this.health = health;
    this.salsaBottles = salsaBottles;
    this.drawObjects = drawObjects;
    this.clouds = clouds;
    this.backgroundObjekts = backgroundObjekts;
  }
}
