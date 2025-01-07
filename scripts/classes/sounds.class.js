/**
 * Manages the sounds in the game.
 */
class Sounds {
  /** @type {Audio} */
  GameThemeSound = new Audio("../assets/audio/gameThemeSong.mp3");
  /** @type {Audio} */
  BossThemeSound = new Audio("../assets/audio/boss-fight.mp3");
  /** @type {Audio} */
  BossStompIntroSound = new Audio("../assets/audio/stomp-intro.mp3");
  /** @type {Audio} */
  CoinCollectSound = new Audio("../assets/audio/collect_coin.mp3");
  /** @type {Audio} */
  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");
  /** @type {Audio} */
  open_bottle_sound = new Audio("../assets/audio/bottle_open_fluo.mp3");
  /** @type {Audio} */
  boss_attack_sound = new Audio("../assets/audio/Boss_Attack.mp3");
  /** @type {Audio} */
  char_walking_souund = new Audio("../assets/audio/walk.mp3");
  /** @type {Audio} */
  explosion_sound = new Audio("../assets/audio/explosion.mp3");
  /** @type {Audio} */
  jump_sound = new Audio("../assets/audio/jump.mp3");
  /** @type {Audio} */
  onclick_sound = new Audio("../assets/audio/onclick.mp3");
  /** @type {Audio} */
  boss_hello_sound = new Audio("../assets/audio/boss-hello.mp3");
  /** @type {Audio} */
  hurts_sound = new Audio("../assets/audio/thisHurts.mp3");
  /** @type {Audio} */
  game_over_sound = new Audio("../assets/audio/gameOverBuh.mp3");
  /** @type {Audio} */
  win_sound = new Audio("../assets/audio/winSound.mp3");
  /** @type {Audio} */
  collect_heart_sound = new Audio("../assets/audio/collect-heart.mp3");
  /** @type {Audio} */
  heart_collect_sound = new Audio("../assets/audio/collect-heart.mp3");
  /** @type {Array<number>} */
  soundInterval = [];

  /**
   * Creates an instance of Sounds.
   * @param {Object} world - The game world.
   */
  constructor(world) {
    this.world = world;
    this.BossThemeSound.loop = true;
    this.GameThemeSound.loop = true;
    this.startThemeSound();
    this.soundSystem();

    setTimeout(() => {
      this.soundInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  /**
   * Plays the game over sound.
   */
  gameIsOverSound() {
    if (!soundsMute) {
      if (this.game_over_sound.paused) {
        this.game_over_sound.volume = 0.2;
        this.game_over_sound.play();
      }
    }
  }

  /**
   * Plays the walking sound.
   */
  walkSound() {
    if (!soundsMute) {
      this.char_walking_souund.play();
      this.char_walking_souund.playbackRate = 3;
    }
  }

  /**
   * Stops the walking sound.
   */
  walkSoundStop() {
    this.char_walking_souund.pause();
  }

  /**
   * Manages the sound system.
   */
  soundSystem() {
    let soundSystemInterval = setInterval(() => {
      this.checkPlayBossTheme();
      this.startThemeSound();
    }, 500);
    this.soundInterval.push(soundSystemInterval);
  }

  /**
   * Plays the game win sound.
   */
  gameWinSound() {
    if (!soundsMute) {
      if (this.win_sound.paused) {
        this.win_sound.volume = 0.7;
        this.win_sound.playbackRate = 0.8;
        this.win_sound.play();
      }
    }
  }

  /**
   * Plays the hurt sound.
   */
  thisHurts() {
    if (!soundsMute) {
      this.hurts_sound.play();
      this.hurts_sound.volume = 0.3;
    }
  }

  /**
   * Plays the boss hello sound.
   */
  bossSayHello() {
    if (!soundsMute) {
      this.boss_hello_sound.play();
      this.boss_hello_sound.volume = 0.75;
      this.boss_hello_sound.playbackRate = 1.5;
    }
  }

  /**
   * Plays the onclick sound.
   */
  onclickSound() {
    if (!soundsMute) {
      this.onclick_sound.play();
    }
  }

  /**
   * Checks and plays the boss theme sound.
   */
  checkPlayBossTheme() {
    let checkSoundInterval = setInterval(() => {
      if (!soundsMute) {
        if (
          world.character.x > 4150 &&
          !this.BossStompIntroSound.played.length &&
          !soundsMute
        ) {
          this.GameThemeSound.pause();
          this.BossStompIntroSound.play();
          this.BossStompIntroSound.playbackRate = 1.5;
          this.BossStompIntroSound.volume = 1;
        }
        if (
          world.character.x > 4850 &&
          !this.BossThemeSound.played.length &&
          !soundsMute
        ) {
          this.GameThemeSound.pause();
          this.BossThemeSound.play();
          this.BossThemeSound.loop = true;
          this.BossThemeSound.volume = 0.15;
          this.bossSayHello();
        }
      }
    }, 100);
    this.soundInterval.push(checkSoundInterval);
  }

  /**
   * Plays the collect heart sound.
   */
  collectHeartSound() {
    if (!soundsMute) {
      this.collect_heart_sound.play();
      this.collect_heart_sound.volume = 0.7;
    }
  }

  /**
   * Starts the theme sound.
   */
  startThemeSound() {
    if (!soundsMute && world.character.x < 4150) {
      this.GameThemeSound.play();
      this.GameThemeSound.loop = true;
      this.GameThemeSound.volume = 0.3;
    }
    if (soundsMute) {
      this.GameThemeSound.pause();
    }
  }

  /**
   * Plays the collect coin sound.
   */
  collectCoinSound() {
    if (!soundsMute) {
      this.CoinCollectSound.play();
      this.CoinCollectSound.volume = 0.5;
    }
  }

  /**
   * Plays the jump sound.
   */
  jumpSound() {
    if (!soundsMute) {
      this.jump_sound.play();
      this.jump_sound.playbackRate = 1.2;
      this.jump_sound.volume = 1;
    }
  }

  /**
   * Plays the enemy kill sound.
   */
  enemyKillSound() {
    if (!soundsMute) {
      this.chicken_isKilled_sound.play();
      this.chicken_isKilled_sound.volume = 0.25;
    }
  }

  /**
   * Plays the open bottle sound.
   */
  openBottleSound() {
    if (!soundsMute) {
      this.open_bottle_sound.play();
      this.open_bottle_sound.volume = 0.6;
    }
  }

  /**
   * Plays the boss attack sound.
   */
  bossAttacksCharSound() {
    if (!soundsMute) {
      this.boss_attack_sound.play();
      this.boss_attack_sound.volume = 0.7;
    }
  }

  /**
   * Plays the explosion sound.
   */
  explosionSound() {
    if (!soundsMute) {
      this.explosion_sound.play();
      this.explosion_sound.playbackRate = 2;
    }
  }

  /**
   * Stops all currently playing sounds.
   */
  stopAllSounds() {
    this.BossThemeSound.pause();
    this.GameThemeSound.pause();
  }
}
