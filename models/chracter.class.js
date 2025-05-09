class Character extends MovableObject {
  height = 150;

  IMAGES_RUNNING = [
    "img/hero/run1.png",
    "img/hero/run2.png",
    "img/hero/run3.png",
    "img/hero/run4.png",
    "img/hero/run5.png",
    "img/hero/run6.png",
    "img/hero/run7.png",
    "img/hero/run8.png",
  ];

  currentImage = 0;

  constructor() {
    super().loadImage("img/warrior.png");
    this.loadImages(this.IMAGES_RUNNING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_RUNNING.length;
      let path = this.IMAGES_RUNNING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }

  jump() {}
}
