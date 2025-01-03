class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;
  speed = 3.5;
  coin = 0;
  salsaBottle = 20;
  idleCounter = 0;
  invulnerableMode = true;
  hitByBoss = false;
  objekt_is_dead = false;
  isJumping = false;

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
  walking_sound = new Audio("../assets/audio/walk.mp3");

  constructor() {
    super();
    this.loadImage(this.Images_Idle[0]);
    this.loadImages(this.Images_Idle);
    this.loadImages(this.Images_LongIdle);
    this.loadImages(this.Images_Walk);
    this.loadImages(this.images_Jump);
    this.loadImages(this.images_Dead);
    this.loadImages(this.image_final_dead);
    this.loadImages(this.images_Hurt);
    this.applyGravity();
    this.x = -300;
    this.animate();
    this.energy = 100;
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
  }

  moveAndJump() {
    setInterval(() => {
      this.walking_sound.pause();
      this.moveRightIfNeeded();
      this.moveLeftIfNeeded();
      this.jumpIfNeeded();
      this.world.camera_x = -this.x + 125;
    }, 1000 / 60);
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
      this.walking_sound.playbackRate = 3;
      this.walking_sound.play();
      this.otherDirection = false;
      this.idleCounter = 0;
    }
  }

  moveLeftIfNeeded() {
    if (
      this.world.keyboard.LEFT &&
      this.x > -719 * 1.5 &&
      !this.isDead() &&
      !this.isHurt()
    ) {
      this.moveLeft();
      this.walking_sound.playbackRate = 3;
      this.walking_sound.play();
      this.otherDirection = true;
      this.idleCounter = 0;
    }
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
      this.jump(); // Sofortiger Sprung
  
      setTimeout(() => {
        this.isJumping = false;
      }, 250); // Setze isJumping nach 500ms zurück
    }
  }

  handleIdleCounter() {
    setInterval(() => {
      if (
        !this.world.keyboard.RIGHT &&
        !this.world.keyboard.LEFT &&
        !this.world.keyboard.SPACE
      ) {
        this.idleCounter++;
        console.log(this.idleCounter);
      }
    }, 1000);
  }

  invulnerableTime() {
    setInterval(() => {
      if (this.isHurt() && !this.invulnerableMode) {
        this.invulnerableMode = true;
        console.log("INVULNERABLE");

        setTimeout(() => {
          this.invulnerableMode = false;
          console.log("NOT INVULNERABLE");
        }, 2000);
      }
    }, 100);
  }

  animateWalking() {
    setInterval(() => {
      if (
        !this.isDead() &&
        !this.isHurt() &&
        !this.isAboveGround() && 
        (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
      ) {
        this.playAnimation(this.Images_Walk);
      }
    }, 100);
  }

  animateJumping() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.images_Jump);
        }

    },140);
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
    setInterval(() => {
      if (this.isDead()) {
        if (!this.objekt_is_dead) {
          this.playAnimation(this.images_Dead);
          setTimeout(() => {
            this.objekt_is_dead = true;
          }, 220);
        } else {
          this.playAnimation(this.image_final_dead);
        }
      }
    }, 100);
  }

  animateIdle() {
    setInterval(() => {
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
  }
}
