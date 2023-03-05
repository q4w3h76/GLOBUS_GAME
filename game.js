let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let globus = new Image();
let nazi = new Image();

globus.src = "img/globus.png"
nazi.src = "img/nazi.png"

let yPos = 400;
let xPos = 100;

class Nazi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.texture = new Image();
        this.texture.src = "img/nazi.png";
    }
    draw() {
        ctx.drawImage(this.texture, this.x, this.y);
        this.x -= 3;
        if(this.x < 0)
            this.x  = 1000;
    }
}

document.addEventListener("keydown", jump)

function jump() {
    if(yPos > 50)
        yPos -= 80;
}

let artyom1 = new Nazi(400, 300);
let artyom2 = new Nazi(800, 300);

function main_loop() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 1000, 500);

    ctx.drawImage(globus, xPos, yPos);
    artyom1.draw();
    artyom2.draw();
    
    if(yPos <= 400) {
        yPos += 3;
    }
    requestAnimationFrame(main_loop);
}

main_loop();
