const FPS = 30;
const SHIP_SIZE = 30;
/* @type {HTMLCanvasElement} */
let canv = document.getElementById("gameCanvas");
let ctx = canv.getContext("2d");

// game loop
setInterval(update, 1000 / FPS);

// ship
let ship = new Ship(canv.width / 2, canv.height - SHIP_SIZE / 2, SHIP_SIZE);

function update() {
    // draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw ship
    ship.draw();

}