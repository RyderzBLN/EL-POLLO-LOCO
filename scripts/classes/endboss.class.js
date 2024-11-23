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

  Images_Walk = [
    "../assets/img/4_enemie_boss_chicken/1_walk/G1.png",
    "../assets/img/4_enemie_boss_chicken/1_walk/G2.png",
    "../assets/img/4_enemie_boss_chicken/1_walk/G3.png",
    "../assets/img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  Images_Attack = [
    "../assets/img/4_enemie_boss_chicken/3_attack/G13.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G14.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G15.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G16.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G17.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G18.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G19.png",
    "../assets/img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  Images_Hurt = [
    "../assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G21.png",

    "../assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    "../assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  image_final_dead = ["../assets/img/2_character_pepe/5_dead/D-57.png"];

  constructor() {
    super();
    this.loadImage(this.ImagesIdle[0]);
    this.loadImages(this.ImagesIdle);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.Images_Walk);
    this.loadImages(this.Images_Attack);
    this.loadImages(this.Images_Hurt);
    this.loadImages(this.image_final_dead);
    this.x = 1400;
    this.energy = 15;
    this.animate();
    this.fastAnimate();
  }

  animate() {
    setInterval(() => {
      if (this.isHurt() && !this.isDead()) {
        this.playAnimation(this.Images_Hurt);
      }
    }, 100);

    setInterval(() => {
      if (this.isDead() && !this.isKilled) {
        this.playAnimation(this.Images_Dead);

        setTimeout(() => {
          this.isKilled = true;
          this.y = 312;
        }, 1270);
      }

      if (this.isKilled && this.isDead()) {
        this.playAnimation(this.image_final_dead);
      }

      if (!this.isDead()) {
        this.playAnimation(this.ImagesIdle);
      }
    }, 200);
  }

  fastAnimate() {
    setInterval(() => {
      if (this.isDead() && !this.isKilled) {
        this.height -= 5;
        this.width -= 2.75;
        this.x += 1.5;
        this.y += 4.8
      }
    }, 25);
  }
}
