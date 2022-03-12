// canvas setup
const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = `50px Georgia`;
let gameSpeed = 1;

// mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};
canvas.addEventListener("mousedown", (event) => {
  mouse.click = true;
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
});
canvas.addEventListener("mouseup", () => {
  mouse.click = false;
});

// player
const playerLeft = new Image();
playerLeft.src = `spritesheets/fish1_swim_left.png`;
const playerRight = new Image();
playerRight.src = `spritesheets/fish1_swim_right.png`;

class Player {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height / 2;
    this.radius = 50;
    this.angle = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.spriteWidth = 498;
    this.spriteHeight = 327;
  }
  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    let theta = Math.atan2(dy, dx);
    this.angle = theta;

    if (mouse.x !== this.x) this.x -= dx / 30;
    if (mouse.y !== this.y) this.y -= dy / 30;
  }
  draw() {
    if (mouse.click) {
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    if (this.x >= mouse.x) {
      ctx.drawImage(
        playerLeft,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        0 - 60,
        0 - 43,
        this.spriteWidth / 4,
        this.spriteHeight / 4
      );
    } else {
      ctx.drawImage(
        playerRight,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        0 - 60,
        0 - 43,
        this.spriteWidth / 4,
        this.spriteHeight / 4
      );
    }
    ctx.restore();
  }
}
const player = new Player();

// bubbles
const bubbleArray = [];
class Bubble {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 100;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
  }
  update() {
    this.y -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    ctx.fillStyle = "aqua";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

const bubblePop1 = document.createElement("audio");
bubblePop1.src = `resources/bubbleSound1.ogg`;

const bubblePop2 = document.createElement("audio");
bubblePop2.src = `resources/bubbleSound2.wav`;

function handleBubbles() {
  if (gameFrame % 60 === 0) {
    bubbleArray.push(new Bubble());
  }
  for (let i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].update();
    bubbleArray[i].draw();

    if (bubbleArray[i].y < 0 - this.radius) {
      bubbleArray.splice(i, 1);
      i--;
    }
    if (bubbleArray[i].distance < bubbleArray[i].radius + player.radius) {
      bubbleArray[i].y <= canvas.height / 2
        ? bubblePop1.play()
        : bubblePop2.play();
      bubbleArray.splice(i, 1);
      score++;
      i--;
    }
  }
}

// repeating background
const background = new Image();
background.src = `spritesheets/background1.png`;

const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  BG.x1 -= gameSpeed;
  BG.x2 -= gameSpeed;
  if (BG.x1 < -BG.width) BG.x1 = BG.width;
  if (BG.x2 < -BG.width) BG.x2 = BG.width;
  ctx.drawImage(background, BG.x1, BG.y, canvas.width, canvas.height);
  ctx.drawImage(background, BG.x2, BG.y, canvas.width, canvas.height);
}

// animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleBubbles();
  player.update();
  player.draw();
  gameFrame++;
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 50);

  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvasPosition = canvas.getBoundingClientRect();
});
