class BottleDisplay extends DrawableObejekt {
    Image = "../assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"


    constructor(world) {

        super();
        this.world = world;
        this.loadImage(this.Image);
        this.y = 5;
        this.x = 625;
        this.width = 55;
        this.height = 40;
    }

    draw(ctx) {
        super.draw(ctx);
        this.drawBottleCount(ctx);
      }
    
      drawBottleCount(ctx) {
        ctx.font = "24px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(" x " + this.world.character.salsaBottle, this.x + 35, this.y + 30);
      }
}