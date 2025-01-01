class Sounds {
  BossThemeSound = new Audio("../assets/audio/bossTheme.mp3");
  BossStompIntroSound = new Audio("../assets/audio/stomp-intro.mp3");
  CoinCollectSound = new Audio("../assets/audio/collect_coin.mp3");
  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");
  open_bottle_sound = new Audio("../assets/audio/bottle_open_fluo.mp3");
  boss_attack_sound = new Audio("../assets/audio/Boss_Attack.mp3");

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

  collectCoinSound(){
    this.CoinCollectSound.play();
  }

  enemyKillSound(){
    this.chicken_isKilled_sound.play();
  }

  openBottleSound(){
    this.open_bottle_sound.play();
  }

  bossAttacksCharSound(){
    this.boss_attack_sound.play();
  }
}
