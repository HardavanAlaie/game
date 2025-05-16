class Endboss extends MovableObject {
  IMAGES_RUNNING = [
    "img/endboss1/Walk1.png",
    "img/endboss1/Walk2.png",
    "img/endboss1/Walk3.png",
    "img/endboss1/Walk4.png",
    "img/endboss1/Walk5.png",
    "img/endboss1/Walk6.png",
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
