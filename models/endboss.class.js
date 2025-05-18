class Endboss extends MovableObject {
  y = 185;
  width = 300;
  height = 300;
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
    "img/endboss1/Death0.png",
    "img/endboss1/Death1.png",
    "img/endboss1/Death01.png",
    "img/endboss1/Death2.png",
    "img/endboss1/Death3.png",
    "img/endboss1/Death4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);

    this.x = 700;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_RUNNING);
    }, 200);
  }
}
