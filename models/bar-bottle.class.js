class BottleBar extends DrawableObject {
  IMAGES = [
    "img/gameui/bottle/0.png",
    "img/gameui/bottle/20.png",
    "img/gameui/bottle/40.png",
    "img/gameui/bottle/60.png",
    "img/gameui/bottle/80.png",
    "img/gameui/bottle/100.png",
  ];

  availableBottle = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 60;
    this.y = 20;
    this.width = 200;
    this.height = 60;
  }

    setPercentage(availableBottle) {
    this.availableBottle = availableBottle;
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
}
