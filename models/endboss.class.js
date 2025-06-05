class Endboss extends MovableObject {
  y = 185;
  width = 300;
  height = 300;

  // IMAGES_RUNNING = Array.from({ length: 5 }, (_, i) => `img/endboss1/Anger${i + 1}.png`);
  // IMAGES_MAGICFIRE = Array.from({ length: 5 }, (_, i) => `img/endboss1/Magic_fire${i + 1}.png`);
  IMAGES_DEATH = Array.from(
    { length: 6 },
    (_, i) => `img/endboss1/Death${i + 1}.png`
  );
  IMAGES_HURT = Array.from(
    { length: 2 },
    (_, i) => `img/endboss1/Hurt${i + 1}.png`
  );
  IMAGES_RUNNING = [
    "img/endboss1/Anger1.png",
    "img/endboss1/Anger2.png",
    "img/endboss1/Anger3.png",
    "img/endboss1/Anger4.png",
    "img/endboss1/Anger5.png",
    "img/endboss1/Magic_fire1.png",
    "img/endboss1/Magic_fire2.png",
    "img/endboss1/Magic_fire3.png",
    "img/endboss1/Magic_fire4.png",
    "img/endboss1/Magic_fire5.png",
  ];

  constructor() {
  super().loadImage(this.IMAGES_RUNNING[0]);
  this.loadImages(this.IMAGES_RUNNING);
  this.x = 700;
  this.y = 185;
  this.width = 300;
  this.height = 300;
  this.energy = 100;
  this.statusBar = new StatusBarEnemy(this.x + 60, this.y - 20); // Lebensanzeige über dem Kopf
  this.animate();
}

updateStatusBar() {
  if (this.statusBar) {
    this.statusBar.x = this.x + 60;
    this.statusBar.y = this.y - 20;
    this.statusBar.setPercentage(this.energy);
  }
}


  // constructor() {
  //   super().loadImage(this.IMAGES_RUNNING[0]);
  //   this.loadImages(this.IMAGES_RUNNING);
  //   // this.loadImages(this.IMAGES_MAGICFIRE);
  //   this.loadImages(this.IMAGES_DEATH);
  //   this.loadImages(this.IMAGES_HURT);
  //   this.x = 700;
  //   //--------------------------------
  //   this.y = 185;
  //   this.width = 300;
  //   this.height = 300;
  //   this.energy = 100;
  //   this.statusBar = new StatusBarEnemy(this.x, this.y - 30);
  //   //--------------------------------
  //   this.animate();
  // }

  // updateStatusBar() {
  //   this.statusBar.x = this.x + 50; // über dem Kopf
  //   this.statusBar.y = this.y - 20;
  //   this.statusBar.setPercentage(this.energy);
  // }

  animate() {
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEATH);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else {
        this.playAnimation(this.IMAGES_RUNNING);
      }
      //this.playAnimation(this.IMAGES_MAGICFIRE);
      //this.playAnimation(this.IMAGES_DEATH);
    }, 200);
    // setInterval(() => {
    //   this.playAnimation(this.IMAGES_MAGICFIRE);
    // }, 2000);
    // setInterval(() => {
    //   this.playAnimation(this.IMAGES_DEATH);
    // }, 300);
  }
}
