class Level {
    enemies;
    clouds;
    backgroundObjekts;
    level_end_x = 1525;

    constructor(enemies, clouds, backgroundObjekts){
        this.enemies = enemies
        this.clouds = clouds
        this.backgroundObjekts = backgroundObjekts;
    }
}