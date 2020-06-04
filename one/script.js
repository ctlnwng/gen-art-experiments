// Initial noise values
var xoff = Math.random() * 20;
var yoff = Math.random() * 20;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
  //  noLoop()
}

function draw () {
  let x = map(noise(xoff), 0, 1, 0, width); // same as noise(xoff) * width
  let y = map(noise(yoff), 0, 1, 0, height);

  let g = map(noise(xoff), 0, 1, 0, 255);
  let b = map(noise(yoff), 0, 1, 0, 255);

  noStroke();
  fill(245, g, b, 50)
  ellipse(x, y, 24, 23);

  xoff += 0.01;
  yoff += 0.01;
}

draw();