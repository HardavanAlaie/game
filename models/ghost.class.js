class Ghost extends MovableObject {
  IMAGES_RUNNING = [
'img/ghost/ghost01_idle1.png',
'img/ghost/ghost02_idle2.png',
'img/ghost/ghost03_idle3.png',
'img/ghost/ghost04_walk_turn.png',
'img/ghost/ghost05_walk1.png',
'img/ghost/ghost06_walk2.png',
'img/ghost/ghost07_walk3.png',
'img/ghost/ghost08_walk4.png',
  ];
  
  currentImage = 0;

  constructor() {
    super().loadImage("img/ghost.png");
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
