class Sounds {
  BossThemeSound = new Audio("../assets/audio/bossTheme.mp3");
  BossStompIntroSound = new Audio("../assets/audio/stomp-intro.mp3");

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
    if (world.character.x > 1000 && !this.BossStompIntroSound.played.length) {
      this.BossStompIntroSound.play();
      this.BossStompIntroSound.playbackRate = 1.5;
      this.BossStompIntroSound.volume = 1;
    }
    if (world.character.x > 1200 && !this.BossThemeSound.played.length) {
      this.BossThemeSound.play();
    }
  }
}
