const canvas = document.querySelector(".liquidCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 0;
let adjustY = 0;
const colorArr = ["white", "lime", "red"];

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "magenta");
gradient.addColorStop(0.25, "cyan");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(0.75, "lime");
gradient.addColorStop(1, "red");

// handle mouse
const mouse = {
  x: null,
  y: null,
  radius: 150,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // mouse.radius += 1;
  //   console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText("PROJECT", 10, 40);
ctx.fillText("LIQUID", 10, 80);
const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + mouse.radius / 50;
  }
  draw() {
    ctx.fillStyle = "white";
    // ctx.fillStyle = colorArr[Math.trunc(Math.random() * (colorArr.length - 1))];
    // ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let distX = mouse.x - this.x;
    let distY = mouse.y - this.y;
    let distance = Math.sqrt(distX ** 2 + distY ** 2);
    let forceDirectionX = distX / distance;
    let forceDirectionY = distY / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
      this.size = 1;

      ctx.fillStyle = gradient;
      // ctx.fillStyle =
      //   colorArr[Math.trunc(Math.random() * (colorArr.length - 1))];
      ctx.fill();
    } else {
      this.size = 2;
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }

      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

// console.log(textCoordinates, textCoordinates.width);
function init() {
  particleArray = [];
  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        let positionX = x + adjustX;
        let positionY = y + adjustY;
        particleArray.push(new Particle(positionX * 5, positionY * 5));
      }
    }
  }
}
init();
// console.log(particleArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
    // connect();
  }
  requestAnimationFrame(animate);
}
animate();

function connect() {
  let opacityValue;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let dx = particleArray[a].x - particleArray[b].x;
      let dy = particleArray[a].y - particleArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 50;
      opacityValue = 1 - distance / maxDistance;

      if (distance < maxDistance) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
        ctx.lineWidth = 0.1;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}
