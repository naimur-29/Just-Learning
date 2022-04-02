const canvas = document.querySelector(".canvas2");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// IMPACT
// MOUSE POSITION
const anotherMouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (event) => {
  anotherMouse.x = event.x;
  anotherMouse.y = event.y;
});

const impacts = [];

class ImpactParticle {
  constructor() {
    this.x = anotherMouse.x;
    this.y = anotherMouse.y;
    this.size = 1;
    this.speed = 18;
    this.color = "rgba(0, 0, 0, 0.1)";
  }

  draw() {
    c.strokeStyle = this.color;
    c.lineWidth = 50;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    c.stroke();
    c.closePath();
  }

  update() {
    this.size += this.speed;
  }
}

function updateImpactParticles() {
  for (let i = 0; i < impacts.length; i++) {
    impacts[i].draw();
    impacts[i].update();

    // REMOVE IMPACT
    if (impacts[i].size >= 2000) {
      impacts.splice(i, 1);
      i--;
    }
  }
}
// IMPACT END

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

let mouseDown = false;
addEventListener("mousedown", () => {
  mouseDown = true;
});

addEventListener("mouseup", () => {
  mouseDown = false;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 15;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 1500; i++) {
    const canvasWidth = canvas.width + 1000;
    const canvasHeight = canvas.height + 2000;

    const x = Math.random() * canvasWidth - canvasWidth / 2;
    const y = Math.random() * canvasHeight - canvasHeight / 2;
    const radius = 2 * Math.random();

    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(new Particle(x, y, radius, color));
  }
}

// Animation Loop
let radians = 0;
let alpha = 1;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(10, 10, 10, ${alpha})`;
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);
  c.rotate(radians);
  particles.forEach((particle) => {
    particle.update();
  });
  c.restore();

  radians += 0.003;

  if (mouseDown && alpha >= 0.03) {
    alpha -= 0.01;
    radians += 0.01;
  } else if (!mouseDown && alpha < 1) {
    alpha += 0.01;
  }
}

init();
animate();
