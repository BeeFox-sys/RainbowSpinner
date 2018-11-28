
var dots = []
var img;
var speed;
var textBol;
var osc, env, ftt;
var lines;

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  lines = false;
  speed = -0.0005;
  textBol = true
  for(var i = 0; i < 30; i++){
    dots.push(new Dot(25+(i*10), 0.02+((30-i)*speed), [(map(i,0,30,0,360)),70,100]))
  }
  dots.forEach(function(dot,index){
    switch ((index)%8) {
      case 0:
        dot.note = 261.63 * pow(2, floor(index/8))
        break;
      case 1:
        dot.note = 293.66 * pow(2, floor(index/8))
        break;
      case 2:
        dot.note = 329.63 * pow(2, floor(index/8))
        break;
      case 3:
        dot.note = 349.23 * pow(2, floor(index/8))
        break;
      case 4:
        dot.note = 392 * pow(2, floor(index/8))
        break;
      case 5:
        dot.note = 440 * pow(2, floor(index/8))
        break;
      case 6:
        dot.note = 493.88 * pow(2, floor(index/8))
        break;
      default:
        break;
    }
  })
  img = createImage(100, 100);
  img.loadPixels();
  for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
      img.set(i, j, color(0, 0, 0));
    }
  }
  img.updatePixels();
  image(img, 0, 0, width, height)
  strokeWeight(10);
}

function draw() {
  colorMode(RGB)
  tint(0,0,0,50)
  image(img, 0, 0, width, height)
  colorMode(HSB)
  translate(width/2,height/2)
  if(lines){
  dots.forEach(function(dot, index) {
    if(index+1 < dots.length){
    var x = cos(dot.angle)*dot.radius;
    var y = sin(dot.angle)*dot.radius;
    var x2 = cos(dots[index+1].angle)*dots[index+1].radius;
    var y2 = sin(dots[index+1].angle)*dots[index+1].radius;
    stroke(dot.colour)
    line(x,y,x2,y2)
  }
  dot.angle += dot.speed
  if(dot.angle > PI*3.5){
    dot.angle = dot.angle-(PI*2)
  }
})
} else {
    dots.forEach(function(dot, index) {
        stroke(dot.colour);
        var x = cos(dot.angle)*dot.radius;
        var y = sin(dot.angle)*dot.radius;
        point(x,y);
        dot.angle += dot.speed
        if(dot.angle > PI*3.5){
          dot.angle = dot.angle-(PI*2)
        }
  })
}
if(textBol){
  noStroke()
  fill(255)
  text(` 'p' to hide/show text \n '[' to slow down speed ']' to speed up speed \n Space to toggle line mode`, -(width/2)+10, -(height/3)+10)
}
}

function speedChange() {
  if(speed >= -0.0005){
  dots.forEach(function(dot, i) {
      dot.speed = 0.02+((30-i)*speed)
    })
  } else {
    speed = -0.0005
  }
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
  // image(img, 0, 0, width, height)
}

function keyTyped() {
  switch (key) {
    case ' ':
      lines = !lines;
      break;
    case ']':
      speed += 0.0005;
      speedChange();
      break;
    case '[':
      speed -= 0.0005;
      speedChange();
      break;
    case 'p':
      textBol = !textBol
    default:
      break;

  }
}
