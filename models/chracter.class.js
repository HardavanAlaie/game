class Character extends MovableObject {
  height = 150;
  y = 160;
  speed = 10;

  IMAGES_RUNNING = Array.from(
    { length: 8 },
    (_, i) => `img/hero/run${i + 1}.png`
  );
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

  IMAGES_JUMPING = Array.from(
    { length: 12 },
    (_, i) => `img/hero/high_jump${i + 1}.png`
  );
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

  IMAGES_DEATH = Array.from(
    { length: 10 },
    (_, i) => `img/hero/death${i + 1}.png`
  );

  IMAGES_HURT = Array.from(
    { length: 4 },
    (_, i) => `img/hero/hurt${i + 1}.png`
  );

  world;

  currentImage = 0;

  constructor() {
    super().loadImage(this.IMAGES_RUNNING[0]);
    this.loadImages(this.IMAGES_RUNNING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEATH);
    this.loadImages(this.IMAGES_HURT);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
      }

      if (this.world.keyboard.SPACE) {
        this.throw();
      }
      // if (this.world.keyboard.D) {
      //   this.throw();
      // }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEATH);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        //jump animation
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          //walk animation
          this.playAnimation(this.IMAGES_RUNNING);
        }
      }
      // if (this.isDead()) {
      //   this.speed = 0;
      //   this.playAnimation(this.IMAGES_DEATH);
      // }
    }, 50);
  }

  // jump() {
  //   this.speedY = 30;
  // }
}
