export function member(p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [196,153,142, 130];
  this.name = 'member1';

  this.update = function(){
    var gravity = p.createVector(0, 0.1);
    var wind = p.createVector(p.random(-1, 1), 0);

    // return gravity.add(wind);
  }

  this.draw = function(pos) {
    // p.fill(10,52,180, 10);
    // p.rect(size.x, size.y, size.w, size.h);

    p.stroke(230,230,230,255);
    p.strokeWeight(2);
    p.fill(230,230,230,255);
    p.ellipse(pos.x, pos.y, 3, 3);
  };
}
