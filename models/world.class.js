class World {
  character = new Character();
  enemies = level1.enemies;
  fogs = level1.fogs;
  backgroundObject = level1.backgroundObject;
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  throwableObject = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
    }, 200);
  }

  checkThrowableObjects() {
    if (this.throwableObject.length > 0) {
      this.throwableObject.forEach((bottle) => {
        if (bottle.isDead()) {
          this.throwableObject.splice(this.throwableObject.indexOf(bottle), 1);
        }
      });
    }

    if (this.keyboard.SPACE) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObject.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.character.isHurt();
      }
    });

    this.throwableObject.forEach((bottle) => {
  this.level.enemies.forEach((enemy) => {
    if (bottle.isColliding(enemy)) {
      enemy.hit();
      if (enemy.statusBar) {
        enemy.statusBar.setPercentage(enemy.energy);
      }

      this.throwableObject.splice(this.throwableObject.indexOf(bottle), 1);
    }
  });
});


    // this.throwableObject.forEach((bottle) => {
    //   this.level.enemies.forEach((enemy) => {
    //     if (bottle.isColliding(enemy)) {
    //       enemy.hit(); // Gegner bekommt Schaden
    //       this.throwableObject.splice(this.throwableObject.indexOf(bottle), 1); // Flasche entfernen

    //       if (enemy.isDead()) {
    //         this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1); // Gegner entfernen
    //       }
    //     }
    //   });
    // });
  }

  /*  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.character.isHurt();
        //console.log('energy ', this.character.energy);
      }
      // if (this.character.isColliding(bottle)) {

      // }
      // if (this.throwableObject.isColliding(enemy)) {
      //   this.throwableObject.splice(this.throwableObject.indexOf(bottle), 1);
      //   this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);
      //   this.statusBar.setPercentage(this.enemy.energy);
      // }
      // if (this.character.isDead()) {
      //   this.character.energy = 0;
      //   console.log('dead ', this.character.energy);
      // }
    });
  }
*/

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObject);

    this.ctx.translate(-this.camera_x, 0);
    //------ space for fixed objects -------
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    //this.addObjectsToMap(this.level.enemies);
    this.level.enemies.forEach((enemy) => {
      this.addToMap(enemy);
      if (enemy.statusBar) {
        enemy.updateStatusBar();
        this.addToMap(enemy.statusBar);
      }
    });

    this.addObjectsToMap(this.level.fogs);
    this.addObjectsToMap(this.throwableObject);

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
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.img.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
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
