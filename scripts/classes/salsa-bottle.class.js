class SalsaBottle extends MovableObjekt {
    y = 223;
    isCollect = false;


constructor(){
    super();
    this.loadImage("../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png")
    this.isCollect = false;
    this.x = 200 + Math.random() * 500;
}
}