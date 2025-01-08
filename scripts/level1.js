let level1;

function initLevel(){
  level1 = new Level(
  [
    new Chicken(300),
    new Chicken(300),
    new SmallChicken(300),
    new Chicken(300),
    new Chicken(300),
    new Chicken(300),
    new Chicken(300),
    new SmallChicken(),
    new Chicken(300),
    new Chicken(300),
    new Chicken(),
    new Chicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new Chicken(),
    new Chicken(),
  ],
  [new Endboss()],
  [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
  ],
  [new HealtItem(this.isSpecial = true), new HealtItem(this.isSpecial = false), new HealtItem(this.isSpecial = false)],
  [
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
    new SalsaBottle(),
  ],
  [new Shield()],

  [
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
  ],

  [
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      -719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      -719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      -719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      -719 * 2
    ),
    new BackgroundObjekt("../assets/img/5_background/layers/air-3.png", -719),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/2.png",
      -719
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/2.png",
      -719
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/2.png",
      -719
    ),
    new BackgroundObjekt("../assets/img/5_background/layers/air-3.png", 0),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      0
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      0
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      0
    ),
    new BackgroundObjekt("../assets/img/5_background/layers/air-3.png", 719),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/2.png",
      719  
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/2.png",
      719 
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/2.png",
      719 
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 2 
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 3
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 4
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      719 * 4
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      719 * 4
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      719 * 4
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 5
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/2.png",
      719 * 5
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/2.png",
      719 * 5
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/2.png",
      719 * 5
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 6
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      719 * 6
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      719 * 6
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      719 * 6
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 7
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/2.png",
      719 * 7
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/2.png",
      719 * 7
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/2.png",
      719 * 7
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/air-3.png",
      719 * 8
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/3_third_layer/1.png",
      719 * 8
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/2_second_layer/1.png",
      719 * 8
    ),
    new BackgroundObjekt(
      "../assets/img/5_background/layers/1_first_layer/1.png",
      719 * 8
    ),
  ]);
} 


