class Character extends MovableObject {
  IMAGES_RUNNING = [
    'img/run1.png',
    'img/run2.png',
    'img/run3.png',
    'img/run4.png',
    'img/run5.png',
    'img/run6.png',
    'img/run7.png',
    'img/run8.png'

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
      let path = IMAGES_RUNNING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }

  jump() {}
}
