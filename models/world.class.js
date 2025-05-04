class World {

    character = new Character();
    enemies = [
        new Spider(),
        new Mosquito(),
        new Ghost(),
    ];
    fogs = [
        new Fog('img/bg/bg2/myst.png')
    ];
    backgroundObject = [
        new BackgroundObject('img/bg/bg2/rock1.png', 0, 178),
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

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.fogs);
        this.addObjectsToMap(this.backgroundObject);

        //requestAnimationFrame(() => this.draw());  // draw() wird immer wieder aufgerufen. Variante 1
        let self = this;                             // draw() wird immer wieder aufgerufen. Variante 2
        requestAnimationFrame(function () { 
            self.draw(); 
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }



    //                      Variante 1
    // draw() {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //     this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

    //     //this.enemies.forEach((enemy) => this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height));  // Variante 1
    //     this.enemies.forEach(enemy => {                                                                                      // Variante 2                     
    //         this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
    //     });

    //     this.fogs.forEach(fog => {                                                                                                      
    //         this.ctx.drawImage(fog.img, fog.x, fog.y, fog.width, fog.height);
    //     });

    //     this.backgroundObject.forEach(rock => {                                                                                                      
    //         this.ctx.drawImage(rock.img, rock.x, rock.y, rock.width, rock.height);
    //     });

    //     //requestAnimationFrame(() => this.draw());  // draw() wird immer wieder aufgerufen. Variante 1
    //     let self = this;                             // draw() wird immer wieder aufgerufen. Variante 2
    //     requestAnimationFrame(function () { 
    //         self.draw(); 
    //     });

    //     // for (let i = 0; i < this.enemies.length; i++) {
    //     //     this.ctx.drawImage(this.enemies[i].img, this.enemies[i].X, this.enemies[i].y, this.enemies[i].width, this.enemies[i].height);
    //     // }
    // }

    // addToMap(mo) {
    //     this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    // }



    //                      Variante 2
    // draw() {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //     this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

    //     //this.enemies.forEach((enemy) => this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height));  // Variante 1
    //     this.enemies.forEach(enemy => {                                                                                      // Variante 2                     
    //         this.addToMap(enemy);
    //     });

    //     this.fogs.forEach(fog => {                                                                                                      
    //         this.addToMap(fog);
    //     });

    //     this.backgroundObject.forEach(rock => {                                                                                                      
    //         this.addToMap(rock);
    //     });

    //     //requestAnimationFrame(() => this.draw());  // draw() wird immer wieder aufgerufen. Variante 1
    //     let self = this;                             // draw() wird immer wieder aufgerufen. Variante 2
    //     requestAnimationFrame(function () { 
    //         self.draw(); 
    //     });

    //     // for (let i = 0; i < this.enemies.length; i++) {
    //     //     this.ctx.drawImage(this.enemies[i].img, this.enemies[i].X, this.enemies[i].y, this.enemies[i].width, this.enemies[i].height);
    //     // }
    // }

    // addToMap(mo) {
    //     this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    // }
}