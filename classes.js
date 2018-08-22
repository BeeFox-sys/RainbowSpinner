class Dot {
  constructor(r, s, c) {
    this.radius = r;
    this.angle = -1.5;
    this.speed = s;
    this.colour = c;
  }

  draw(){
    stroke(this.colour);
    strokeWeight(10);
    var x = cos(this.angle)*this.radius;
    var y = sin(this.angle)*this.radius;
    point(x,y);
    this.angle += this.speed
  }
}
