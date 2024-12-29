class ThrowableObject extends MovableObjekt {
  Images = [
    "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "../assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  constructor(x, y, characterOtherDirection, world) {
    super().loadImage(
      "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.Images);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.characterOtherDirection = characterOtherDirection;
    this.world = world

    this.throw();
  }

  throw() {
    // evt SpeedY wert auch anpassen...
    this.speedY = 12.5;
    this.applyGravity();
    setInterval(() => {
      if (world.character.x < 250 && this.characterOtherDirection) {
        this.x -= 5;
      } 
      
      if (world.character.x < 250 &&  !this.characterOtherDirection) {
        this.x += 5;
      }

      // WERTE ANPASSEN - FUNKTION STEHT FÜR WURF ENTFERNUNG JE nachdem wo man ist 
      if (world.character.x > 250 && this.characterOtherDirection) {
        this.x -= 35;
      } 
      if (world.character.x > 250 && !this.characterOtherDirection) {
        this.x += 35;
      } 


      this.playAnimation(this.Images);
    }, 25);
  }
}