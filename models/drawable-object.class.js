class DrawableObject {
  x = 120;
  y = 300;
  height = 150;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image'); <img id="image">
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Mosquito ||
      this instanceof Ghost ||
      this instanceof Spider ||
      this instanceof Endboss ||
      this instanceof Endboss2
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
