class Ghost extends MovableObject{

    constructor() {
        super().loadImage('img/ghost.png');

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