class Mosquito extends MovableObject {
  IMAGES_RUNNING = [
    "img/mosquito/idle1.png",
    "img/mosquito/idle2.png",
    "img/mosquito/idle3.png",
  ];

  currentImage = 0;

  constructor() {
    super().loadImage("img/mosquito.png");
    this.loadImages(this.IMAGES_RUNNING);

    this.animate();

    this.x = 200 + Math.random() * 500;
    //this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_RUNNING.length;
      let path = this.IMAGES_RUNNING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }

  // animate() {
  //     setInterval(() => {
  //         this.x -= 0.2;
  //     }, 1000 / 60);
  // }
}
