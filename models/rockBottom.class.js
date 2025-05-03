class RockBottom extends MovableObject {
    y = 170;
    width = 700;
    height = 300;

    constructor() {
        super().loadImage('img/bg/bg2/rock1.png');                                                 

        this.x = 10 + Math.random() * 500;
    }
}