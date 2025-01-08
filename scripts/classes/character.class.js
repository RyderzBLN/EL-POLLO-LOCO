/**
 * Class representing a character.
 * @extends MovableObjekt
 */
class Character extends MovableObjekt {
  height = 260;
  width = 105;
  y = 173;
  speed = 7;
  coin = 0;
  salsaBottle = 10;
  idleCounter = 0;
  invulnerableMode = false;
  hitByBoss = false;
  objekt_is_dead = false;
  isJumping = false;
  energy = 100;

  Images_Idle = [
    "../assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  Images_LongIdle = [
    "../assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "../assets/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  Images_Walk = [
    "../assets/img/2_character_pepe/2_walk/W-21.png",
    "../assets/img/2_character_pepe/2_walk/W-22.png",
    "../assets/img/2_character_pepe/2_walk/W-23.png",
    "../assets/img/2_character_pepe/2_walk/W-24.png",
    "../assets/img/2_character_pepe/2_walk/W-25.png",
  ];

  images_Jump = [
    "../assets/img/2_character_pepe/3_jump/J-31.png",
    "../assets/img/2_character_pepe/3_jump/J-32.png",
    "../assets/img/2_character_pepe/3_jump/J-33.png",
    "../assets/img/2_character_pepe/3_jump/J-34.png",
    "../assets/img/2_character_pepe/3_jump/J-35.png",
    "../assets/img/2_character_pepe/3_jump/J-36.png",
    "../assets/img/2_character_pepe/3_jump/J-37.png",
    "../assets/img/2_character_pepe/3_jump/J-38.png",
    "../assets/img/2_character_pepe/3_jump/J-39.png",
  ];

  images_Dead = [
    "../assets/img/2_character_pepe/5_dead/D-51.png",
    "../assets/img/2_character_pepe/5_dead/D-52.png",
    "../assets/img/2_character_pepe/5_dead/D-53.png",
    "../assets/img/2_character_pepe/5_dead/D-54.png",
    "../assets/img/2_character_pepe/5_dead/D-55.png",
    "../assets/img/2_character_pepe/5_dead/D-56.png",
    "../assets/img/2_character_pepe/5_dead/D-57.png",
  ];

  image_final_dead = ["../assets/img/2_character_pepe/5_dead/D-57.png"];

  images_Hurt = [
    "../assets/img/2_character_pepe/4_hurt/H-41.png",
    "../assets/img/2_character_pepe/4_hurt/H-42.png",
    "../assets/img/2_character_pepe/4_hurt/H-43.png",
  ];

  world;
  charInterval = [];

  /**
   * Create a character.
   * @param {Object} sounds - The sounds object.
   */
  constructor(sounds) {
    super();
    this.sounds = sounds;
    this.loadImage(this.Images_Idle[0]);
    this.loadImages(this.Images_Idle);
    this.loadImages(this.Images_LongIdle);
    this.loadImages(this.Images_Walk);
    this.loadImages(this.images_Jump);
    this.loadImages(this.images_Dead);
    this.loadImages(this.image_final_dead);
    this.loadImages(this.images_Hurt);
    this.applyGravity();
    this.x = 4500;
    this.y = 250;
    this.animate();
    this.energy = 100;
    setTimeout(() => {
      this.charInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  animate() {
    this.moveAndJump();
    this.handleIdleCounter();
    this.invulnerableTime();
    this.animateWalking();
    this.animateJumping();
    this.animateHurt();
    this.animateDead();
    this.animateIdle();
    this.notUnderZeroEnergy();
    this.checkWalkSound();
  }

  moveAndJump() {
    let moveAndJumpInterval = setInterval(() => {
      this.moveRightIfNeeded();
      this.moveLeftIfNeeded();
      this.jumpIfNeeded();

      this.world.camera_x = -this.x;
      +120;
    }, 30);
    this.charInterval.push(moveAndJumpInterval);
  }

  moveRightIfNeeded() {
    if (
      this.world &&
      this.world.keyboard.RIGHT &&
      this.x < this.world.level.level_end_x &&
      !this.isDead() &&
      !this.isHurt()
    ) {
      this.moveRight();
      this.otherDirection = false;
      this.idleCounter = 0;
    }
  }

  moveLeftIfNeeded() {
    if (this.x < 4500 || (this.x > 4505 && this.x < 5300)) {
      if (
        this.world.keyboard.LEFT &&
        this.x > -719 * 1.5 &&
        !this.isDead() &&
        !this.isHurt()
      ) {
        this.moveLeft();

        this.otherDirection = true;
        this.idleCounter = 0;
      }
      if (this.world.keyboard.LEFT && this.x > 4500) {
        this.speed = 3;
      } else {
        this.speed = 7;
      }
    }
  }

  checkWalkSound() {
    let walkSoundInterval = setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        (this.world.keyboard.LEFT &&
          !this.isDead() &&
          !this.isHurt() &&
          !this.isAboveGround())
      ) {
        sounds.walkSound();
      } else {
        sounds.walkSoundStop();
      }
    }, 70);
    this.charInterval.push(walkSoundInterval);
  }

  jumpIfNeeded() {
    if (
      this.world.keyboard.SPACE &&
      !this.isAboveGround() &&
      !this.isDead() &&
      !this.isHurt() &&
      !this.isJumping
    ) {
      this.isJumping = true;
      this.idleCounter = 0;
      this.jump();
      sounds.jumpSound();
      setTimeout(() => {
        this.isJumping = false;
      }, 30);
      this.playHurtsSound();
    }
  }

  playHurtsSound() {
    let hurtsSoundInterval = setInterval(() => {
      if (this.isHurt()) {
        sounds.thisHurts();
      }
    }, 100);
    this.charInterval.push(hurtsSoundInterval);
  }

  handleIdleCounter() {
    let idleCounterInterval = setInterval(() => {
      if (
        !this.world.keyboard.RIGHT &&
        !this.world.keyboard.LEFT &&
        !this.world.keyboard.SPACE
      ) {
        this.idleCounter++;
      }
    }, 1000);
    this.charInterval.push(idleCounterInterval);
  }

  invulnerableTime() {
    let invulnerableTimeInterval = setInterval(() => {
      if (this.isHurt() && !this.invulnerableMode) {
        this.invulnerableMode = true;

        setTimeout(() => {
          this.invulnerableMode = false;
        }, 2000);
      }
    }, 100);
    this.charInterval.push(invulnerableTimeInterval);
  }

  animateWalking() {
    let animateWalkingInterval = setInterval(() => {
      if (
        !this.isDead() &&
        !this.isHurt() &&
        !this.isAboveGround() &&
        (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
      ) {
        this.playAnimation(this.Images_Walk);
      }
      if (this.world.keyboard.LEFT && !this.x > 4500) {
        this.playAnimation(this.Images_Walk);
      }
    }, 100);
    this.charInterval.push(animateWalkingInterval);
  }

  animateJumping() {
    let animateJumpingInterval = setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.images_Jump);
      }
    }, 140);
    this.charInterval.push(animateJumpingInterval);
  }

  animateHurt() {
    setInterval(() => {
      if (this.isHurt()) {
        this.playAnimation(this.images_Hurt);
        this.idleCounter = 0;
      }
    }, 100);
  }

  animateDead() {
    let animateDeadInterval = setInterval(() => {
      if (this.isDead()) {
        if (!this.objekt_is_dead) {
          this.playAnimation(this.images_Dead);
          setTimeout(() => {
            this.objekt_is_dead = true;
          }, 250);
        } else {
          this.playAnimation(this.image_final_dead);
        }
      }
    }, 100);
    this.charInterval.push(animateDeadInterval);
  }

  animateIdle() {
    let idleInterval = setInterval(() => {
      if (
        !this.isDead() &&
        !this.isHurt() &&
        !this.isAboveGround() &&
        !this.world.keyboard.RIGHT &&
        !this.world.keyboard.LEFT &&
        !this.world.keyboard.SPACE
      ) {
        if (this.idleCounter < 10) {
          this.playAnimation(this.Images_Idle);
        } else {
          this.playAnimation(this.Images_LongIdle);
        }
      }
    }, 100);
    this.charInterval.push(idleInterval);
  }

  notUnderZeroEnergy() {
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  reset() {
    this.x = -300;
    this.coin = 0;
    this.salsaBottle = 0;
    this.objekt_is_dead = false;
    this.invulnerableMode = false;
    this.hitByBoss = false;
    this.energy = 100;
  }
}
