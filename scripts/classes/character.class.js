class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;
  speed = 4;
  coin = 0;
  salsaBottle = 500;
  idleCounter = 0;

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

  images_Hurt = [
    "../assets/img/2_character_pepe/4_hurt/H-41.png",
    "../assets/img/2_character_pepe/4_hurt/H-42.png",
    "../assets/img/2_character_pepe/4_hurt/H-43.png",
  ];

  world;
  walking_sound = new Audio("../assets/audio/walk.mp3");

  constructor() {
    super();
    this.loadImage("../assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.Images_Idle);
    this.loadImages(this.Images_LongIdle);
    this.loadImages(this.images_Jump);
    this.loadImages(this.images_Dead);
    this.loadImages(this.images_Hurt);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.walking_sound.playbackRate = 3;
        this.walking_sound.play();
        this.otherDirection = false;
        this.idleCounter = 0;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.walking_sound.playbackRate = 3;
        this.walking_sound.play();
        this.otherDirection = true;
        this.idleCounter = 0;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.idleCounter = 0;
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    // HIER JUMP / SPACE BEACHTEN!
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.images_Dead);
      } else if (this.isHurt()) {
        this.playAnimation(this.images_Hurt);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.images_Jump);
      } else {
        if (
          !this.world.keyboard.RIGHT &&
          !this.world.keyboard.LEFT &&
          !this.world.keyboard.SPACE &&
          this.idleCounter < 10
        ) {
          this.playAnimation(this.Images_Idle);
        } else if (
          !this.world.keyboard.RIGHT &&
          !this.world.keyboard.LEFT &&
          !this.world.keyboard.SPACE &&
          this.idleCounter >= 10
        ) {
          this.playAnimation(this.Images_LongIdle);
        }
      }
    }, 100);

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
}
