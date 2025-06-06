class Mosquito extends MovableObject {
  IMAGES_RUNNING = Array.from(
    { length: 3 },
    (_, i) => `img/mosquito/idle${i + 1}.png`
  );
  // IMAGES_RUNNING = [
  //   "img/mosquito/idle1.png",
  //   "img/mosquito/idle2.png",
  //   "img/mosquito/idle3.png",
  // ];

  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);

    this.x = 200 + Math.random() * 500;
    this.y = 185;
    this.width = 60;
    this.height = 60;
    this.energy = 100;
    this.statusBar = new StatusBarEnemy(this.x, this.y - 15);
    this.animate();
  }

  updateStatusBar() {
    this.statusBar.x = this.x;
    this.statusBar.y = this.y - 15;
    this.statusBar.setPercentage(this.energy);
  }

  hit() {
    this.energy -= 20;
    if (this.energy < 0) this.energy = 0;
    this.updateStatusBar();
  }

  animate() {
    setInterval(() => {
      this.x -= 0.2;
    }, 1000 / 60);
  }
}

// animate() {
//   setInterval(() => {
//     this.playAnimation(this.IMAGES_RUNNING);
//   }, 100);
// }
