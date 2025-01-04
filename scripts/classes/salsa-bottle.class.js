class SalsaBottle extends MovableObjekt {
  static lastBottleX = 100; 

  y = 340;
  height = 100;
  width = 85;
  isCollect = false;

  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.isCollect = false;
    this.x = this.getNextBottlePosition(); 
  }

  getNextBottlePosition() {
    const minDistance = 200;
    const maxDistance = 800;
    const randomDistance = Math.random() * (maxDistance - minDistance) + minDistance;
    SalsaBottle.lastBottleX += randomDistance;
    return SalsaBottle.lastBottleX;
  }
}