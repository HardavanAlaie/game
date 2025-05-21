class Character extends MovableObject {
  height = 150;
  y = 160;
  speed = 10;

  IMAGES_RUNNING = Array.from({ length: 8 }, (_, i) => `img/hero/run${i + 1}.png`);
  // IMAGES_RUNNING = [
  //   "img/hero/run1.png",
  //   "img/hero/run2.png",
  //   "img/hero/run3.png",
  //   "img/hero/run4.png",
  //   "img/hero/run5.png",
  //   "img/hero/run6.png",
  //   "img/hero/run7.png",
  //   "img/hero/run8.png",
  // ];

  
  // for (let i = 0; i < 8; i++) {
  //   this.IMAGES_RUNNING[i] = this.IMAGES_RUNNING[i];
  // } 


  IMAGES_JUMPING = Array.from({ length: 12 }, (_, i) => `img/hero/high_jump${i + 1}.png`);
  // IMAGES_JUMPING = [
  //   "img/hero/high_jump1.png",
  //   "img/hero/high_jump2.png",
  //   "img/hero/high_jump3.png",
  //   "img/hero/high_jump4.png",
  //   "img/hero/high_jump5.png",
  //   "img/hero/high_jump6.png",
  //   "img/hero/high_jump7.png",
  //   "img/hero/high_jump8.png",
  //   "img/hero/high_jump9.png",
  //   "img/hero/high_jump10.png",
  //   "img/hero/high_jump11.png",
  //   "img/hero/high_jump12.png",
  // ];

  world;

  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
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
      if (this.isAboveGround()) {
        //jump animation
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          //walk animation
          this.playAnimation(this.IMAGES_RUNNING);
        }
      }
    }, 50);
  }

  jump() {}
}
