class World {
  character = new Character();
  enemies = [
    new Spider(), 
    new Mosquito(), 
    new Ghost()
  ];
  fogs = [
    new Fog()
  ];
  backgroundObject = [
    new BackgroundObject("img/bg/bg2/bg.png", 0, 90),
    new BackgroundObject("img/bg/bg2/rock4.png", 0, 90),
    new BackgroundObject("img/bg/bg2/rock3.png", 0, 90),
    new BackgroundObject("img/bg/bg2/rock2.png", 0, 5),
    new BackgroundObject("img/bg/bg2/rock1.png", 0, 178),
    //new BackgroundObject('img/bg/bg2/myst.png', 0, 90)
    new BackgroundObject("img/bg/bg2/rock2.png", 720, 5),
    new BackgroundObject("img/bg/bg2/rock1.png", 720, 178),
  ];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.fogs);

    this.ctx.translate(-this.camera_x, 0);

    //requestAnimationFrame(() => this.draw());  // draw() wird immer wieder aufgerufen. Variante 1
    let self = this; // draw() wird immer wieder aufgerufen. Variante 2
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.img.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      this.ctx.restore();
      mo.x = mo.x * -1;
    }
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
