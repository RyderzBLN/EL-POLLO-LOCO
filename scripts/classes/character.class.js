class Character extends MovableObjekt {
  height = 260;
  width = 120;
  y = 173;

  ImagesIdle = [
    "../assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "../assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  constructor() {
    super();
    this.loadImage("../assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.ImagesIdle);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.ImagesIdle.length;
      let path = this.ImagesIdle[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 1000 / 4);
  }

  jump() {}
}
