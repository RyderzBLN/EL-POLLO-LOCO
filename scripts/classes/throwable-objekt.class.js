class ThrowableObject extends MovableObjekt {
  Images = [
    "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  splash_Image = [
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y, characterOtherDirection, world) {
    super().loadImage(
      "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.Images);
    this.loadImages(this.splash_Image);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.characterOtherDirection = characterOtherDirection;
    this.world = world;

    this.throw();
  }

  throw() {
    this.speedY = 12.5;
    this.applyGravity();

    let animationInterval = setInterval(() => {
      this.playAnimation(this.Images);

      if (world.character.x < 5000 && this.characterOtherDirection) {
        this.x -= 3;
      }

      if (world.character.x < 5000 && !this.characterOtherDirection) {
        this.x +=  7;
      }
      
      if (world.character.x >= 5000 && !this.characterOtherDirection) {
        this.x += 12;
      }
    }, 30);

    setTimeout(() => {
      clearInterval(animationInterval);
      this.stopGravity();
      this.splashAnimation();
    }, 700);
  }

  stopGravity() {
    this.speedY = 0;
    this.acceleration = 0;
  }

  splashAnimation() {
    let splashInterval = setInterval(() => {
      this.playAnimation(this.splash_Image);
    }, 50);

    setTimeout(() => {
      clearInterval(splashInterval);
    }, this.splash_Image.length * 50);
  }
}
