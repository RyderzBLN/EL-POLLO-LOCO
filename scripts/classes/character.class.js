class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;
  constructor() {
    super();
    this.loadImage("../assets/img/2_character_pepe/1_idle/idle/I-1.png");
  }

  jump() {}
}
