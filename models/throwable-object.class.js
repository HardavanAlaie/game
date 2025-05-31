class ThrowableObject extends MovableObject {
    constructor() {
        super().loadImage('img/gameui/bottle/1_salsa_bottle_on_ground.png');
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
        this.throw(100, 150);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}