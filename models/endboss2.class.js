class Endboss2 extends MovableObject {
  y = 185;
  width = 300;
  height = 300;
  IMAGES_RUNNING = [
    "img/endboss2/Anger1.png",
    "img/endboss2/Anger2.png",
    "img/endboss2/Anger3.png",
    "img/endboss2/Anger4.png",
    "img/endboss2/Anger5.png",
    "img/endboss2/Attack1.png",
    "img/endboss2/Attack2.png",
    "img/endboss2/Attack3.png",
    "img/endboss2/Attack4.png",
    "img/endboss2/Attack5.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);

    this.x = 900;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_RUNNING);
    }, 200);
  }
}
