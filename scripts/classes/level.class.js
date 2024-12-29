class Level {
  enemies;
  coins;
  salsaBottles;
  drawObjects;
  clouds;
  backgroundObjekts;

  level_end_x = 1525;

  constructor(enemies, coins, salsaBottles,drawObjects, clouds, backgroundObjekts) {
    this.enemies = enemies;
    this.coins = coins;
    this.salsaBottles = salsaBottles;
    this.drawObjects = drawObjects;
    this.clouds = clouds;
    this.backgroundObjekts = backgroundObjekts;
  }
}
