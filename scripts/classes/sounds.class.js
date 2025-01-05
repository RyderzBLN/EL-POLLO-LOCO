class Sounds {
  GameThemeSound = new Audio("../assets/audio/gameThemeSong.mp3");
  BossThemeSound = new Audio("../assets/audio/boss-fight.mp3");
  BossStompIntroSound = new Audio("../assets/audio/stomp-intro.mp3");
  CoinCollectSound = new Audio("../assets/audio/collect_coin.mp3");
  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");
  open_bottle_sound = new Audio("../assets/audio/bottle_open_fluo.mp3");
  boss_attack_sound = new Audio("../assets/audio/Boss_Attack.mp3");
  explosion_sound = new Audio("../assets/audio/explosion.mp3");
  jump_sound = new Audio("../assets/audio/jump.mp3");
  soundInterval = [];

  constructor(world) {
    this.world = world;
    this.BossThemeSound.loop = true;
    this.soundSystem();

    setTimeout(() => {
      this.soundInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  soundSystem() {
    this.checkPlayBossTheme();
    let soundSystemInterval = setInterval(() => {
      this.checkPlayBossTheme();
    }, 500);
    this.soundInterval.push(soundSystemInterval);
  }

  checkPlayBossTheme() {
    if (world.character.x > 1000 && !this.BossStompIntroSound.played.length) {
      this.BossStompIntroSound.play();
      this.BossStompIntroSound.playbackRate = 1.5;
      this.BossStompIntroSound.volume = 1;
    }
    if (world.character.x > 300 && !this.BossThemeSound.played.length) {
      this.BossThemeSound.play();
      this.BossThemeSound.volume = 0.5;
      this.GameThemeSound.pause();
    }
  }

  startThemeSound() {
    this.GameThemeSound.loop = true;
    this.GameThemeSound.volume = 0.15;
  }

  collectCoinSound() {
    this.CoinCollectSound.play();
  }

  jumpSound() {
    this.jump_sound.play();
    this.jump_sound.playbackRate = 1.2;
    this.jump_sound.volume = 1;
  }

  enemyKillSound() {
    this.chicken_isKilled_sound.play();
    this.chicken_isKilled_sound.volume = 0.25;
  }

  openBottleSound() {
    this.open_bottle_sound.play();
  }

  bossAttacksCharSound() {
    this.boss_attack_sound.play();
  }

  explosionSound() {
    this.explosion_sound.play();
    this.explosion_sound.playbackRate = 2;
  }
}
