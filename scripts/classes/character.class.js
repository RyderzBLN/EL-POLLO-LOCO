class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;
  speed = 4;
  ImagesIdle = [
    "../assets/img/2_character_pepe/2_walk/W-21.png",
    "../assets/img/2_character_pepe/2_walk/W-22.png",
    "../assets/img/2_character_pepe/2_walk/W-23.png",
    "../assets/img/2_character_pepe/2_walk/W-24.png",
    "../assets/img/2_character_pepe/2_walk/W-25.png",
  ];

  world;
  walking_sound = new Audio("../assets/audio/walk.mp3");

  constructor() {
    super();
    this.loadImage("../assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.ImagesIdle);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.playbackRate = 3;
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.playbackRate = 3;
        this.walking_sound.play();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    // HIER JUMP / SPACE BEACHTEN!
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.SPACE
      ) {
        this.playAnimation(this.ImagesIdle);
      }
    }, 100);
  }

  jump() {}
}
