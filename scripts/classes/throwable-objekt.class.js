class ThrowableObject extends MovableObjekt {
  Images = [
    "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  constructor(x, y, characterOtherDirection) {
    super().loadImage(
      "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.Images);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.characterOtherDirection = characterOtherDirection;

    this.throw();
  }

  throw() {
    this.speedY = 17.5;
    this.applyGravity();
    setInterval(() => {
      if (this.characterOtherDirection) {
        this.x -= 15;
      } else {
        this.x += 15;
      }
      this.playAnimation(this.Images);
    }, 25);
  }
}