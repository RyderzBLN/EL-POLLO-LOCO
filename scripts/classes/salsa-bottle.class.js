class SalsaBottle extends MovableObjekt {

  height = 60;
  width = 50;
  isCollect = false;

  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.isCollect = false;
    this.x =  Math.random() * 4500;
    this.y = 358 + (Math.random() * 30);
    this.otherDirection = Math.random() < 0.5;
  }


  reset() {
    this.isCollect = false;
    this.x = this.getNextBottlePosition();
  }

}