class Endboss extends MovableObjekt {
  height = 400;
  width = 250;
  energy = 100;
  speed = 5;
  y = 60;
  x = 500;

  ImagesAlert = [
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

  chicken_isKilled_sound = new Audio("../assets/audio/chicken_small_dead.mp3");

  constructor(world, sounds) {
    super();
    this.world = world;
    this.sounds = sounds;
    this.loadImage(this.ImagesAlert[0]);
    this.loadImages(this.ImagesAlert);
    this.loadImages(this.Images_Dead);
    this.loadImages(this.Images_Walk);
    this.loadImages(this.Images_Attack);
    this.loadImages(this.Images_Hurt);
    this.loadImages(this.image_final_dead);
    this.BossMove = false;
    this.isAttacking = false;
    this.animate();
  }

  animate() {
    this.handleHurt();
    this.handleMovement();
    this.logBossMove();
    this.handleAnimations();
  }

  handleHurt() {
    setInterval(() => {
      if (this.isHurt() && !this.isDead()) {
        this.BossMove = false;
        this.playAnimation(this.Images_Hurt);
      }
    }, 100);
  }

  handleMovement() {
    setTimeout(() => {
      setInterval(() => {
        let distance = this.x - world.character.x;
        if (Math.abs(distance) < 400 && !this.isHurt() && !this.isDead()) {
          this.BossMove = true;
          this.speed = 5;
        }
        if (Math.abs(distance) < 50 && distance > 0) {
          this.BossMove = false;
          this.isAttacking = true;
        }
        if (Math.abs(distance) < 150 && distance > 0) {
          this.speed = 15;
        }
      }, 100);
    }, 3000);
  }

  logBossMove() {
    setInterval(() => {
      console.log("BOSSMOVE = ", this.BossMove);
    }, 1000);
  }

  handleAnimations() {
    setInterval(() => {
      if (this.BossMove) {
        this.moveLeft();
      }
    }, 100);

    setInterval(() => {
      this.updateAnimations();
    }, 100);
  }

  updateAnimations() {
    if (this.isDead() && !this.isKilled) {
      this.playAnimation(this.Images_Dead);
      this.BossMove = false;
    } else if (this.isKilled && this.isDead()) {
      this.playAnimation(this.image_final_dead);
    } else if (this.BossMove) {
      this.playAnimation(this.Images_Walk);
    } else if (this.isAttacking && !world.character.energy == 0) {
      this.playAttackAnimation();
    } else if (this.isHurt()) {
      this.playAnimation(this.Images_Hurt);
    } else {
      this.playAnimation(this.ImagesAlert);
    }
  }

  playAttackAnimation() {
    this.playAnimation(this.Images_Attack);
    sounds.bossAttacksCharSound();

    world.character.hitFromBoss();
    world.statusBar.setPercentage(world.character.energy);
    console.log(world.character.energy);
  }



  attack() {
    if (this.isAttacking) {
      setTimeout(() => {
        this.isAttacking = false;
        this.BossMove = true;
      }, 100);
    }
  }
}
