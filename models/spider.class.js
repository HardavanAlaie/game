class Spider extends MovableObject {
    
    constructor() {
        super().loadImage('img/spider.png');

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.2;
        }, 1000 / 60);
    }

    

}