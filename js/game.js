const FPS = 30;

/* @type {HTMLCanvasElement} */
let canv = document.getElementById("gameCanvas");
let ctx = canv.getContext("2d");

// game loop
setInterval(update, 1000 / FPS);

function update() {
    // draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);
}