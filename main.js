var PIXI = require('pixi.js')

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(800, 600);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();

// This creates a texture from a sub-tile in our image.
var tileset = PIXI.Texture.fromImage('./images/tileset.png');
tileset.frame = new PIXI.Rectangle(32, 32, 16, 16)
var tile = new PIXI.Sprite(tileset);

// Setup the position and scale of the tile.
tile.position.x = 400;
tile.position.y = 300;

tile.scale.x = 3.5;
tile.scale.y = 3.5;

// show some font too.
var text = new PIXI.Text("HackWars 3.0 World Map Tech Demo", {font: "30px Arial", fill: "grey"});
text.position.x = 5
text.position.y = 5
stage.addChild(text);

// kick off the animation loop (defined below)
stage.addChild(tile)
animate();

function animate() {
   // start the timer for the next animation loop
   requestAnimationFrame(animate);

   // each frame will spin our tile.
   tile.rotation += 0.01;

   // this is the main render call that makes pixi draw your container and its children.
   renderer.render(stage);
}
