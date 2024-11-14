class Level {
  enemies;
  coins;
  clouds;
  backgroundObjekts;

  level_end_x = 1525;

  constructor(enemies, coins, clouds, backgroundObjekts) {
    this.enemies = enemies;
    this.coins = coins;
    this.clouds = clouds;
    this.backgroundObjekts = backgroundObjekts;
  }
}
