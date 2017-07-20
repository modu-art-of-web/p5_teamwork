
export function member(p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [233,154,108, 255];

  this.r = [size.w] * 0.15;
  this.theta = 0;
  this.update = function(){
    var x = this.r * p.cos(this.theta);
    var y = this.r * p.sin(this.theta);
    this.theta += 0.008;
    var rotate = p.createVector(x*0.01, y*0.01);
    return rotate;
  }
  this.draw = function(pos) {
    // p.push();
    // p.translate(pos.x, pos.y);
    // p.translate(size.x + size.w/2 , size.y + size.h/2);
    p.stroke(0,98,152,100);
    p.strokeWeight(2);
    p.fill(0,98,152);
    // p.line(0, 0, pos.x, pos.y);
    p.ellipse(pos.x, pos.y, 10, 10);
    // pos.x = x;
    // pos.y = y;
    // p.pop();
  }
};
