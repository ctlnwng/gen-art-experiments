// https://genekogan.com/code/p5js-perlin-noise/

// Initial noise values
var t = 0;
var stopAtFrame;

function setup () {
  stopAtFrame = floor(random(400, 600));

  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);
  noFill();
}

function draw () {
  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.007;

  if (frameCount % stopAtFrame == 0) {
    noLoop();
  }
}

draw();