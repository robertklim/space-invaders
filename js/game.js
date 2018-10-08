const FPS = 30;
const FRICTION = 0.7;
const LASER_SPD = 500; // speed of lasers in pixels per second
const SHIP_SIZE = 30;
const SHIP_THRUST = 5;

/** @type {HTMLCanvasElement} */
let canv = document.getElementById("gameCanvas");
let ctx = canv.getContext("2d");

// set up event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// game loop
setInterval(update, 1000 / FPS);

// ship
let ship = new Ship(canv.width / 2, canv.height - SHIP_SIZE / 2, SHIP_SIZE, SHIP_THRUST);

function keyDown(/** @type {KeyboardEvent} */ ev) {
    switch (ev.keyCode) {
        case 32: // space bar (shoot laser)
            ship.shootLaser();
            break;
        case 37: // left arrow
            ship.moveLeft();
            break;
        case 39: // right arrow
            ship.moveRight();
            break;
    }
}

function keyUp(/** @type {KeyboardEvent} */ ev) {
    switch (ev.keyCode) {
        case 32: // space bar
            break;
        case 37: // left arrow
            break;
        case 39: // right arrow
            break;
    }
}

function update() {
    // draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw ship
    ship.draw();

    for (let i = 0; i < ship.lasers.length; i++) {
        // draw lasers
        ctx.fillStyle = "salmon";
        ctx.beginPath();
        ctx.arc(ship.lasers[i].x, ship.lasers[i].y, SHIP_SIZE / 15, 0, Math.PI * 2, false);
        ctx.fill();

        // move lasers
        ship.lasers[i].x += ship.lasers[i].xv;
        ship.lasers[i].y += ship.lasers[i].yv;
    }

}