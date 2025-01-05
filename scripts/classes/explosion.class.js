class ExplosionAttack extends ThrowableObject {
  height = 550;
  width = 550;
  speedY = 0;

  Images = [
    "../assets/img/explosion/00_explosion.png",
    "../assets/img/explosion/01_explosion.png",
    "../assets/img/explosion/02_explosion.png",
    "../assets/img/explosion/03_explosion.png",
    "../assets/img/explosion/04_explosion.png",
    "../assets/img/explosion/04_explosion.png",
    "../assets/img/explosion/05_explosion.png",
    "../assets/img/explosion/06_explosion.png",
    "../assets/img/explosion/07_explosion.png",
  ];

  explosionInterval = [];

  constructor(character, sounds) {
    super();
    this.sounds = sounds;
    this.loadImage(this.Images[0]);
    this.loadImages(this.Images);
    this.x = character.x + 120;
    this.y = -70;
    this.speedY = 0;
    this.animate();
    this.throw();

    setTimeout(() => {
      this.explosionInterval.forEach((interval) => {
        intervalIds.push(interval);
      });
    }, 5000);
  }

  animate() {
    const interval = setInterval(() => {
      this.throw();
      sounds.explosionSound();
    }, 100);
    this.explosionInterval.push(interval);

    setTimeout(() => {
      clearInterval(interval);
      this.img = null;
    }, this.Images.length * 87);
  }

  throw() {
    this.playAnimation(this.Images);
  }
}
