class Ghost extends MovableObject{

    constructor() {
        super().loadImage('img/ghost.png');

        this.x = 200 + Math.random() * 500;
    }
}