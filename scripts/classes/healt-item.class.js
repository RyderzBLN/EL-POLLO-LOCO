class HealtItem extends DrawableObejekt {
  width = 70;
  height = 70;

  Image = "../assets/img/7_statusbars/3_icons/icon_health.png";
  healthInterval = [];

  constructor(sounds) {
    super();
    this.sounds = sounds;
    this.loadImage(this.Image);

    this.isCollect = false;
    this.oneTimeCollect = false;
    this.x = 1000 + Math.random() * 4500;
    this.y = Math.random() * 300 + 50;
    setTimeout(() => {
      this.healthInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }
}
