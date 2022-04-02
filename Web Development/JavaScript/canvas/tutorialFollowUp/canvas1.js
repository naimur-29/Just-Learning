const canvas1 = document.querySelector(".canvas1");
const c = canvas1.getContext("2d");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener("resize", () => {
  window.location.reload();
});
// barrier
// barrier
// barrier

const mouse = {
  x: null,
  y: null,
};
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

const gradientForC1 = c.createLinearGradient(
  0,
  0,
  canvas1.width,
  canvas1.height
);
gradientForC1.addColorStop(0.2, "#012626");
gradientForC1.addColorStop(0.4, "#04BFAD");
gradientForC1.addColorStop(0.6, "#038C7F");
gradientForC1.addColorStop(0.8, "#027368");
gradientForC1.addColorStop(1, "#01403A");

class Circle {
  constructor() {
    this.radius = Math.random() * 5 + 5;
    this.minRadius = this.radius;
    this.maxRadius = this.radius * 3;
    this.x = Math.random() * (canvas1.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas1.height - this.radius * 2) + this.radius;
    this.dx = Math.random() - 2.5;
    this.dy = Math.random() - 0.5;
    this.color = Math.random() * 30;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `hsla(${this.color}, 100%, 50%, 1)`;
    c.fill();
  }

  update() {
    // WINDOW COLLIDER
    if (this.x + this.radius >= canvas1.width || this.x - this.radius <= 0)
      this.dx *= -1;

    if (this.y + this.radius >= canvas1.height || this.y - this.radius <= 0)
      this.dy *= -1;

    this.x += this.dx * 2;
    this.y += this.dy;

    // MOUSE COLLIDER
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius <= this.maxRadius) this.radius += 1;
    } else if (this.radius >= this.minRadius) {
      this.radius -= 1;
    }
  }
}

const circlesArr = [];
const numOfCircles = 500;
const drawCircle = () => {
  for (let i = 0; i < numOfCircles; i++) circlesArr.push(new Circle());
};
drawCircle();

const animate = () => {
  c.fillStyle = "rgba(255, 255, 255, 1)";
  c.fillRect(0, 0, canvas1.width, canvas1.height);

  for (const circle of circlesArr) {
    circle.update();
    circle.draw();
  }

  requestAnimationFrame(animate);
};

animate();
