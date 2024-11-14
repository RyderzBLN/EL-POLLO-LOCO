class Level {
  enemies;
  coins;
  salsaBottles;
  clouds;
  backgroundObjekts;

  level_end_x = 1525;

  constructor(enemies, coins, salsaBottles, clouds, backgroundObjekts) {
    this.enemies = enemies;
    this.coins = coins;
    this.salsaBottles = salsaBottles;
    this.clouds = clouds;
    this.backgroundObjekts = backgroundObjekts;
  }
}
