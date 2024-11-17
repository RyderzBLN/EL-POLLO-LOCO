class DrawableObejekt {
  x = 100;
  y = 280;
  height = 150;
  width = 100;
  img;
  currentImage = 0;
  imgCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawBorder(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Coin || this instanceof SalsaBottle || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }
}
