class Sounds {
  BossThemeSound = new Audio("../assets/audio/bossTheme.mp3");

  constructor(world) {
    this.world = world;
    this.BossThemeSound.loop = true;
    this.soundSystem();
  }

  soundSystem() {
    setInterval(() => {
      this.checkPlayBossTheme();
    }, 100);
  }

  checkPlayBossTheme() {
    if (this.world.character.x > 1000) {
      this.BossThemeSound.play();
    }
  }
}
