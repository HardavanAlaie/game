class StatusBar extends DrawableObject {
  IMAGES = [
    "img/gameui/0.png",
    "img/gameui/20.png",
    "img/gameui/40.png",
    "img/gameui/60.png",
    "img/gameui/80.png",
    "img/gameui/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 30;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
    //this.animate();
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }

  //   animate() {
  //     setInterval(() => {
  //       //this.setPercentage(this.percentage - 20);
  //       //this.world.camera_x = -this.x + 100;0;
  //     }, 1000 / 60);
  //   }
}
