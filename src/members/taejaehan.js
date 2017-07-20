export function member(p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [16,58,40, 50];
  this.name = 'Taejae Han';
  this.textColor = [233,154,108, 255];
  this.link = "http://blog.taejaehan.com/";

  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0.0001;

  this.update = function(){
    this.angle += this.aVelocity;
    this.aVelocity += this.aAcceleration;
    // this.aVelocity += p.random(-0.001, 0.001);
    var random = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1));
    return random;
  }
  this.draw = function(pos) {
    p.stroke(173,91,123, 255);
    p.strokeWeight(2);
    p.fill(173,91,123);


    // p.line(-60, 0, 60, 0);
    // p.ellipse(60, 0, 16, 16);
    // p.ellipse(-60, 0, 16, 16);
    // p.translate(pos.x, pos.y);
    // 
    // p.rotate(this.angle);
    // p.rectMode(p.CENTER);
    // p.push();
    // p.line(pos.x-30, pos.y, pos.x+30, pos.y);
    // p.ellipse(pos.x+30, pos.y, 5, 5);
    // p.ellipse(pos.x-30, pos.y, 5, 5);
    // p.pop();
    // this.angle += this.aVelocity;
    // this.aVelocity = this.aAcceleration;
    // 
    // p.stroke(0);
    // p.fill(175, 200);
    // p.rectMode(p.CENTER);
    p.push();
    p.translate(pos.x, pos.y);
    p.rotate(this.angle);
    // p.rect(0, 0, 5, 5);
    // p.line(pos.x-30, pos.y, pos.x+30, pos.y);
    // p.ellipse(pos.x+30, pos.y, 10, 10);
    // p.ellipse(pos.x-30, pos.y, 10, 10);
    p.line(-10, 0, 10, 0);
    p.ellipse(10, 0, 5, 5);
    p.ellipse(-10, 0, 5, 5);
    p.pop();

    // this.angle += this.aVelocity;
    // this.aVelocity += this.aAcceleration;
    // this.aVelocity += p.random(-0.001, 0.001);
    
    // if(this.aVelocity > 10 || this.aVelocity < 10){
    //   this.aVelocity = 0;
    // }
    
  }
};
