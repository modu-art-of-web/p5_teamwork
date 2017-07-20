export function member (p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [242,187,134, 20];

  this.update = function(){
    var gravity = p.createVector(0, 0.1);

    return gravity;
  }
  this.draw = function(pos) {
    p.stroke(0,166,182, 255);
    p.strokeWeight(2);
    p.fill(0,166,182);
    p.rect(pos.x, pos.y, 10, 10);
  };

};

export function a(){

}
// module.exports = [member1, a];