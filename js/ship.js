class Ship {
    constructor(x, y, size = 30, ship_thrust = 5, a = 90 / 180 * Math.PI, color = "white") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ship_thrust = ship_thrust;
        this.r = this.size / 2;
        this.a = a;
        this.color = color;
        this.canShoot = true;
        this.lasers = new Array();
    }

    draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size / 20;
        ctx.beginPath();
        ctx.moveTo( // nose of the ship
            this.x + 4 / 3 * this.r * Math.cos(this.a),
            this.y - 4 / 3 * this.r * Math.sin(this.a)
        );
        ctx.lineTo( // rear left
            this.x - this.r * (2 / 3 * Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (2 / 3 * Math.sin(this.a) - Math.cos(this.a))
        );
        ctx.lineTo( // rear right
            this.x - this.r * (2 / 3 * Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (2 / 3 * Math.sin(this.a) + Math.cos(this.a))
        );
        ctx.closePath();
        ctx.stroke();
    }

    moveLeft() {
        this.x -= this.ship_thrust;
    }

    moveRight() {
        this.x += this.ship_thrust;
    }

    shootLaser(laser_max = 5) {
        // create laser object
        if (this.canShoot && this.lasers.length < laser_max) {
            this.lasers.push({
                x: this.x + 4 / 3 * this.r * Math.cos(this.a),
                y: this.y - 4 / 3 * this.r * Math.sin(this.a),
                xv: LASER_SPD * Math.cos(this.a) / FPS,
                yv: -LASER_SPD * Math.sin(this.a) / FPS,
                dist: 0
            });
        }
    }

}