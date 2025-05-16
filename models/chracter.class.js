class Character extends MovableObject {
  height = 150;
  speed = 10;

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
  world;

  currentImage = 0;

  constructor() {
    super().loadImage("img/warrior.png");
    this.loadImages(this.IMAGES_RUNNING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //walk animation
        this.playAnimation(this.IMAGES_RUNNING);
      }
    }, 50);
  }

  jump() {}
}
