class MovableObject {

    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();     // this.img = document.getElementById('image'); <img id="image">
        this.img.src = path;
    }

    loadImages(paths) {
        paths.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        // this.X += 2;
        console.log('move right');
    }

    moveLeft() {
        
    }
}