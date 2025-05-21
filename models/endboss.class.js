class Endboss extends MovableObject {
  y = 185;
  width = 300;
  height = 300;

  // IMAGES_RUNNING = Array.from({ length: 5 }, (_, i) => `img/endboss1/Anger${i + 1}.png`);
  // IMAGES_MAGICFIRE = Array.from({ length: 5 }, (_, i) => `img/endboss1/Magic_fire${i + 1}.png`);
  // IMAGES_DEATH = Array.from({ length: 6 }, (_, i) => `img/endboss1/Death${i + 1}.png`);
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
    "img/endboss1/Death1.png",
    "img/endboss1/Death2.png",
    "img/endboss1/Death3.png",
    "img/endboss1/Death4.png",
    "img/endboss1/Death5.png",
    "img/endboss1/Death6.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);
    // this.loadImages(this.IMAGES_MAGICFIRE);
    // this.loadImages(this.IMAGES_DEATH);
    this.x = 700;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_RUNNING);
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
