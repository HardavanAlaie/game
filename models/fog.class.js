class Fog extends MovableObject {
    y = 100;
    width = 600;
    height = 500;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 10 + Math.random() * 500;
    }
}