
var dots = []

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  colorMode(HSB)
  for(var i = 0; i < 30; i++){
    dots.push(new Dot(25+(i*10), +0.04+((30-i)*0.002), [(map(i,0,30,0,360)),70,100]))
  }
}

function draw() {
  background(0)
  translate(width/2,height/2)
  dots.forEach(function(dot) {
    dot.draw()
  })
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
