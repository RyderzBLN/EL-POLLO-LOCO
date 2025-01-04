class Shield extends DrawableObejekt {
  Image = "../assets/img/end.png";

  constructor() {
    super();
    this.loadImage(this.Image);
    this.x = 4800;
    this.y = 270;
    this.height = 150;
    this.width = 140;
  }
}
