class Mosquito extends MovableObject {
    constructor() {
        super().loadImage('img/mosquito.png');

        this.x = 200 + Math.random() * 500;
    }
}



