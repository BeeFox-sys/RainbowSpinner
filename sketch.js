
var dots = []
var img;

function setup() {
  createCanvas(windowWidth,windowHeight)
  // background(0)

  for(var i = 0; i < 30; i++){
    dots.push(new Dot(25+(i*10), +0.04+((30-i)*0.002), [(map(i,0,30,0,360)),70,100]))
  }
img = createImage(100, 100);
img.loadPixels();
for (var i = 0; i < img.width; i++) {
  for (var j = 0; j < img.height; j++) {
    img.set(i, j, color(0, 0, 0));
  }
}
img.updatePixels();
background(0)
}

function draw() {
  colorMode(RGB)
  tint(0,0,100,50)
  image(img, 0, 0, width, height)
  colorMode(HSB)
  translate(width/2,height/2)
  dots.forEach(function(dot) {
    dot.draw()
  })
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
