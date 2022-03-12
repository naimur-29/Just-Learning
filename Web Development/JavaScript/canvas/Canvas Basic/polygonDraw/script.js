const canvas = document.querySelector(".canvas1");
const context = canvas.getContext("2d");
let running = false;
let hue = 0;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
context.strokeStyle = "black";
context.lineWidth = 2;
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.shadowColor = "black";
// context.globalCompositeOperation = "destination-over";

function drawShape(x, y, radius, inset, arms) {
  //   context.fillStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.save();
  context.translate(x, y);
  context.moveTo(0, 0 - radius);

  for (let i = 0; i < arms; i++) {
    context.rotate(Math.PI / arms);
    context.lineTo(0, 0 - radius * inset);
    context.rotate(Math.PI / arms);
    context.lineTo(0, 0 - radius);
  }

  context.restore();
  context.closePath();
  context.stroke();
  context.fill();
}

const radius = 50;
const inset = 0.5;
const arms = 3;
let angle = 0;

canvas.addEventListener("mousemove", (event) => {
  if (running) {
    angle += 0.1;
    hue += 3;
    context.save();
    context.translate(event.x, event.y);

    // context.save();
    // context.fillStyle = "lime";
    // context.rotate(angle);
    // drawShape(0, 0, radius, inset, arms);
    // context.restore();

    context.save();
    context.fillStyle = `hsl(${hue}, 100%, 50%)`;
    context.rotate(-angle);
    drawShape(0, 0, 30, inset, 4);
    context.restore();

    context.save();
    context.fillStyle = "white";
    context.rotate(angle * 2);
    drawShape(50, 50, 10, inset, 2);
    context.restore();

    context.save();
    context.fillStyle = "cyan";
    context.rotate(angle);
    drawShape(100, 100, 10, inset, 2);
    context.restore();

    context.restore();
  }
});

canvas.addEventListener("mousedown", () => {
  running = true;
});
canvas.addEventListener("mouseup", () => {
  running = false;
});
