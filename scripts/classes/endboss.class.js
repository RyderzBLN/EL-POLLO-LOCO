class Endboss extends MovableObjekt {
  height = 400;
  width = 250;
  y = 60;

  ImagesIdle = [
    "../assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "../assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  Images_Dead = [
    "../assets/img/4_enemie_boss_chicken/5_dead/G24.png",
    "../assets/img/4_enemie_boss_chicken/5_dead/G25.png",
    "../assets/img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  image_final_dead = ["../assets/img/2_character_pepe/5_dead/D-57.png"];

  constructor() {
    super();
    this.loadImage(this.ImagesIdle[0]);
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.image_final_dead);
    this.x = 1400;
    this.energy = 99;
    this.animate();
  }

  animate() {
    setInterval(() => {
        if (this.isDead() && !this.objekt_is_dead) {
            this.playAnimation(this.Images_Dead);
            setTimeout(() => {
                this.objekt_is_dead = true;
            }, 500);
        } else if (this.isDead() && this.objekt_is_dead) {
            this.playAnimation(this.image_final_dead);
        } else {
            this.playAnimation(this.ImagesIdle);
        }
    }, 200);
}
}
