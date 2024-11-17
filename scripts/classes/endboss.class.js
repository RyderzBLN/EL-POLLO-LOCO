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
    "../assets/img/4_enemie_boss_chicken/5_dead/G26.png"

  ]
  

  constructor() {
    super();
    this.loadImage(this.ImagesIdle[0]);
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Images_Dead);
    this.x = 1400;
    this.animate();
  }

  animate() {

    setInterval(() => {
      this.playAnimation(this.ImagesIdle);
    }, 200);
  }

}
