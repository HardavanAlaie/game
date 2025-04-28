class World {

    character = new Character();
    enemies = [
        new Spider(),
        new Mosquito(),
        new Spider(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        //this.enemies.forEach((enemy) => this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height));  // Variante 1
        this.enemies.forEach(enemy => {                                                                                      // Variante 2                     
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        //requestAnimationFrame(() => this.draw());  // draw() wird immer wieder aufgerufen. Variante 1
        let self = this;                             // draw() wird immer wieder aufgerufen. Variante 2
        requestAnimationFrame(function () { 
            self.draw(); 
        });

        // for (let i = 0; i < this.enemies.length; i++) {
        //     this.ctx.drawImage(this.enemies[i].img, this.enemies[i].X, this.enemies[i].y, this.enemies[i].width, this.enemies[i].height);
        // }
    }
}