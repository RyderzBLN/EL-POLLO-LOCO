/**
 * Represents a game level.
 */
class Level {
  /** @type {Array} */
  enemies;
  /** @type {Object} */
  endboss;
  /** @type {Array} */
  coins;
  /** @type {number} */
  health;
  /** @type {Array} */
  salsaBottles;
  /** @type {Array} */
  drawObjects;
  /** @type {Array} */
  clouds;
  /** @type {Array} */
  backgroundObjekts;

  /** @type {number} */
  level_end_x = 5550;

  /**
   * Creates an instance of Level.
   * @param {Array} enemies - The enemies in the level.
   * @param {Object} endboss - The end boss of the level.
   * @param {Array} coins - The coins in the level.
   * @param {number} health - The health points in the level.
   * @param {Array} salsaBottles - The salsa bottles in the level.
   * @param {Array} drawObjects - The objects to be drawn in the level.
   * @param {Array} clouds - The clouds in the level.
   * @param {Array} backgroundObjekts - The background objects in the level.
   */
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
