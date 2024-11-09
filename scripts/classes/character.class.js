class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;
  ImagesIdle = [
    "../assets/img/2_character_pepe/2_walk/W-21.png",
    "../assets/img/2_character_pepe/2_walk/W-22.png",
    "../assets/img/2_character_pepe/2_walk/W-23.png",
    "../assets/img/2_character_pepe/2_walk/W-24.png",
    "../assets/img/2_character_pepe/2_walk/W-25.png",
  ];

  world;

  constructor() {
    super();
    this.loadImage("../assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.ImagesIdle);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += 4;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= 4;
        this.otherDirection = true;
      }
      // HIER  JUMP START
      if (this.world.keyboard.SPACE) {
        this.y -= 20;
      } else {
        this.y += 7;
      }
      if (this.y >= 173) {
        this.y = 173
      }
      // END
      this.world.camera_x = -this.x;
    }, 1000 / 60);

    // HIER JUMP / SPACE BEACHTEN!
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.SPACE ) {
        let i = this.currentImage % this.ImagesIdle.length;
        let path = this.ImagesIdle[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      }
    }, 100);
  }

  jump() {}
}
