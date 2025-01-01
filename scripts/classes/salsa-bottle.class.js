class SalsaBottle extends MovableObjekt {
  y = 340;
  height =  100;
  width =  85;
  isCollect = false; 




  constructor() {
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    this.isCollect = false;
    this.x =
      Math.random() * 4500 +
      Math.random() +
      Math.random() +
      Math.random() * 100;

  }

}
