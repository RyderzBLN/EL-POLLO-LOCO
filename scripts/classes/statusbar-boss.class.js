class StatusbarBoss extends Statusbar {
  IMAGES = [
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
    "../assets/img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
  ];

  percentage = 100;

  constructor(world) {
    super();
    this.world = world;
    this.loadImages(this.IMAGES);
    this.y = 45;
    this.width = 150;
    this.height = 50;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imgCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else if (this.percentage >= 0) {
      return 0;
    }
  }

  updatePosition() {
    let endboss = this.world.level.endboss[0];
    if (endboss) {
      this.x = endboss.x;
      this.x += 70;
    }
  }

  draw(ctx) {
    this.updatePosition();
    super.draw(ctx);
  }

  
}
