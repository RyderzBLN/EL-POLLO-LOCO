class Chicken extends MovableObjekt {
  height = 80;
  width = 70;
  y = 347;
  constructor() {
    super();
    this.loadImage("../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );

    this.x = 200 + Math.random() * 500;
  }
}
