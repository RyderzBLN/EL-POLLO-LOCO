class ExplosionAttack extends ThrowableObject {
  height = 450; // 100
  width = 385; // 85

  Images = [
    "../assets/img/explosion/00_explosion.png",
    "../assets/img/explosion/01_explosion.png",
    "../assets/img/explosion/02_explosion.png",
    "../assets/img/explosion/03_explosion.png",
    "../assets/img/explosion/04_explosion.png",
    "../assets/img/explosion/05_explosion.png",
    "../assets/img/explosion/06_explosion.png",
    "../assets/img/explosion/07_explosion.png",
  ];

  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.loadImages(this.Images[0]);
    this.animate();
    this.characterOtherDirection = characterOtherDirection;
    this.world = world
    this.height = 450;
    this.width = 385;
    this.throw();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.Images);
    }, 175);
  }
}
