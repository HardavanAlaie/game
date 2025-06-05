class StatusBarEnemy extends DrawableObject {
  IMAGES = [
    "img/gameui/0.png",
    "img/gameui/20.png",
    "img/gameui/40.png",
    "img/gameui/60.png",
    "img/gameui/80.png",
    "img/gameui/100.png",
  ];

  percentage = 100;

  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 20;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let index = Math.floor(percentage / 20); // 0–5
    index = Math.min(index, 5);
    this.img = this.imageCache[this.IMAGES[index]];
  }
}
