class Spider extends MovableObject {

  IMAGES_RUNNING = Array.from({ length: 6 }, (_, i) => `img/spider/walk${i + 1}.png`);
  // IMAGES_RUNNING = [
  //   "img/spider/walk1.png",
  //   "img/spider/walk2.png",
  //   "img/spider/walk3.png",
  //   "img/spider/walk4.png",
  //   "img/spider/walk5.png",
  //   "img/spider/walk6.png",
  // ];
  currentImage = 0;
  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_RUNNING);
    }, 100);
  }

}
