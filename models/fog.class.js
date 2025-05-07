class Fog extends MovableObject {
    y = 100;
    width = 600;
    height = 500;

    constructor(imagePath) {
        super().loadImage(imagePath);

        this.x = 10 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.2;
        }, 1000 / 60);
    }
}