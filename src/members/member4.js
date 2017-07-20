
export function member(p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [47,97,78, 5];
  this.r = [size.w] * 0.15;
  this.theta = 0;
  this.aVelocity = 0.03;
  this.update = function(){
    var amplitude = this.size.h * 0.3;
    var period = 120;
    // var y = amplitude * p.sin(this.theta);
    var y = amplitude * p.cos( (this.theta) * ( 60 / period));
    this.theta += this.aVelocity;

    var vibration = p.createVector(0, y*0.01);
    return vibration;
  }
  this.draw = function(pos) {
    p.stroke(219,191,135,255);
    p.strokeWeight(2);
    p.fill(219,191,135,150);
    p.line(0, 0, pos.x, 0);
    p.ellipse(pos.x, pos.y, 10, 10);
  }
};
