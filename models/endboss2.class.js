class Endboss2 extends MovableObject {
  y = 185;
  width = 300;
  height = 300;

  IMAGES_ATTACK = Array.from({ length: 5 }, (_, i) => `img/endboss2/Attack${i + 1}.png`);
  // IMAGES_RUNNING = [
  //   "img/endboss2/Anger1.png",
  //   "img/endboss2/Anger2.png",
  //   "img/endboss2/Anger3.png",
  //   "img/endboss2/Anger4.png",
  //   "img/endboss2/Anger5.png",
  //   "img/endboss2/Attack1.png",
  //   "img/endboss2/Attack2.png",
  //   "img/endboss2/Attack3.png",
  //   "img/endboss2/Attack4.png",
  //   "img/endboss2/Attack5.png",
  // ];

  constructor() {
    super().loadImage(this.IMAGES_ATTACK[0]);
    this.loadImages(this.IMAGES_ATTACK);

    this.x = 900;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_ATTACK);
    }, 200);
  }
}
