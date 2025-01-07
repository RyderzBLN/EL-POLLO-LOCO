class Sounds {
  GameThemeSound = new Audio("../assets/audio/gameThemeSong.mp3");
  BossThemeSound = new Audio("../assets/audio/boss-fight.mp3");
  BossStompIntroSound = new Audio("../assets/audio/stomp-intro.mp3");
  CoinCollectSound = new Audio("../assets/audio/collect_coin.mp3");
  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");
  open_bottle_sound = new Audio("../assets/audio/bottle_open_fluo.mp3");
  boss_attack_sound = new Audio("../assets/audio/Boss_Attack.mp3");
  char_walking_souund = new Audio("../assets/audio/walk.mp3");
  explosion_sound = new Audio("../assets/audio/explosion.mp3");
  jump_sound = new Audio("../assets/audio/jump.mp3");
  onclick_sound = new Audio("../assets/audio/onclick.mp3");
  boss_hello_sound = new Audio("../assets/audio/boss-hello.mp3");
  hurts_sound = new Audio("../assets/audio/thisHurts.mp3");
  game_over_sound = new Audio("../assets/audio/gameOverBuh.mp3");
  win_sound = new Audio("../assets/audio/winSound.mp3");
  collect_heart_sound = new Audio("../assets/audio/collect-heart.mp3");
  heart_collect_sound = new Audio("../assets/audio/collect-heart.mp3");
  soundInterval = [];

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

  

  gameIsOverSound() {
    if (!soundsMute) {
    if (this.game_over_sound.paused) {
      this.game_over_sound.volume = 0.2;
      this.game_over_sound.play();
    } }
  }

  walkSound() {
    if (!soundsMute) {
this.char_walking_souund.play();
this.char_walking_souund.playbackRate = 3;
  } }

  walkSoundStop(){
    this.char_walking_souund.pause();
  }
  

  soundSystem() {
    let soundSystemInterval = setInterval(() => {
      this.startThemeSound();
      this.checkPlayBossTheme();
    }, 500);
    this.soundInterval.push(soundSystemInterval);
  }

  gameWinSound() {
    if (!soundsMute) {
    if (this.win_sound.paused) {
      this.win_sound.volume = 0.7;
      this.win_sound.playbackRate = 0.8;
      this.win_sound.play();
    }
  }
  }

  thisHurts(){
    if (!soundsMute) {
    this.hurts_sound.play();
    this.hurts_sound.volume = 0.3;
  } }

  bossSayHello() {
    if (!soundsMute) {
    this.boss_hello_sound.play();
    this.boss_hello_sound.volume = 0.75;
    this.boss_hello_sound.playbackRate = 1.5;
  } }

  onclickSound(){
    if (!soundsMute) {
    this.onclick_sound.play();
  } }

  checkPlayBossTheme() {
    if (!soundsMute) {
    if (world.character.x > 5000 && !this.BossStompIntroSound.played.length) {
      this.BossStompIntroSound.play();
      this.BossStompIntroSound.playbackRate = 1.5;
      this.BossStompIntroSound.volume = 0.3;
      this.bossSayHello();
    }
    if (world.character.x > 5100 && !this.BossThemeSound.played.length) {
      this.BossThemeSound.play();
      this.BossThemeSound.loop = true;
      this.BossThemeSound.volume = 0.25;
      this.GameThemeSound.pause();
    } }
  }


  collectHeartSound() {
    if (!soundsMute) {
this.collect_heart_sound.play();
this.collect_heart_sound.volume = 0.7;
  } }

  startThemeSound() {
    if (!soundsMute) {
    this.GameThemeSound.play();
    this.GameThemeSound.loop = true;
    this.GameThemeSound.volume = 0.15;
  } }

  collectCoinSound() {
    if (!soundsMute) {
    this.CoinCollectSound.play();
    this.CoinCollectSound.volume = 0.5;
  } }

  jumpSound() { 
    if (!soundsMute) {
    this.jump_sound.play();
    this.jump_sound.playbackRate = 1.2;
    this.jump_sound.volume = 1;
  } }

  enemyKillSound() {
    if (!soundsMute) {
    this.chicken_isKilled_sound.play();
    this.chicken_isKilled_sound.volume = 0.25;
  } }

  openBottleSound() {
    if (!soundsMute) { 
    this.open_bottle_sound.play();
    this.open_bottle_sound.volume = 0.6;
  } }

  bossAttacksCharSound() {
    if (!soundsMute) {
    this.boss_attack_sound.play();
    this.boss_attack_sound.volume = 0.5;
  } }

  explosionSound() {
    if (!soundsMute) {
    this.explosion_sound.play();
    this.explosion_sound.playbackRate = 2;
  } }
}
