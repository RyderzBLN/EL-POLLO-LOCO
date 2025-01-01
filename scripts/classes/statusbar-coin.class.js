class StatusbarCoin extends Statusbar {
    IMAGES = [
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
        "../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png"

    ];
  
    percentage = 0;
  
    constructor(world) {
      super();
      this.world = world;
      this.loadImages(this.IMAGES);
      this.y = 105;
      this.x = 20;
      this.width = 150;
      this.height = 50;
      this.setPercentage(0);

    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES[this.resolveImageIndex()];
      this.img = this.imgCache[path];
    }
  
    resolveImageIndex() {
      if (this.percentage >= 10) {
        return 5;
      } else if (this.percentage > 8) {
        return 4;
      } else if (this.percentage > 5) {
        return 3;
      } else if (this.percentage > 3) {
        return 2;
      } else if (this.percentage = 1) {
        return 1;
      } else if (this.percentage >= 0) {
        return 0;
      }
    }
  

  }