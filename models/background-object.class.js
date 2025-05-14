class BackgroundObject extends MovableObject {
    y = 0;
    width = 720;
    height = 480;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);  
        this.x = x;
        this.y = y;                                               

        //this.x = 10 + Math.random() * 500;
    }
}