let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');

    world = new World(canvas);

    console.log('My Character', world.character);
    console.log('My Character', world['character']);
    console.log('The Enemie', world.enemies[0]);
}