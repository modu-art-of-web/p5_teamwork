// // import {p5tw} from '../p5tw.js';
// function setup(){

// }
// function update(p){

//     var friction = p.createVector(-0.1, -0.1);
//     return friction;

//   // var mouse = p5tw.createVector(p5tw.mouseX,p5tw.mouseY);
//  //    mover.acceleration = p5.Vector.sub(mouse,mover.position);

//     // Set magnitude of acceleration
//     // mover.acceleration.setMag(p5tw.random(0, 0.9));
//     // mover.velocity.add(mover.acceleration);
//     // mover.velocity.limit(3);
//     // mover.position.add(mover.velocity);
    

// }
// function draw(p){


//   p.stroke(0,0,255, 0.1, 0.1);
//   p.strokeWeight(2);
//   p.fill(0,0,255,30);
//   // p5tw.background(0);
//   // p5tw.fill('green');
//   // p5tw.ellipse(p5tw.position.x,p5tw.position.y,5,5);
  

//   // p.background(51);
//   // // Apply gravity force to all Particles
//   // var gravity = p.createVector(0, 0.1);
//   // var wind = p.createVector(p.random(-1, 1), 0);
//   // ps.applyForce(wind);

//   // ps.addParticle();
//   // ps.run();

// }

// module.exports  = {
// 	setup : setup,
// 	update : update, 
// 	draw : draw
// };

export function member(p, size) {
  this.size = size;
  this.particles = [];
  this.bg = [25,30,7, 255];
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
    

    // p.stroke(0,255,0, 0.1, 255);
    // p.strokeWeight(2);
    // p.fill(0,255,0);
    // p.rect(pos.x, pos.y, 10, 10);

    // p.push();
    // p.translate(pos.x, pos.y);
    // p.translate(size.x + size.w/2 , size.y + size.h/2);
    p.stroke(0,0,255, 0.1, 0.1);
    p.strokeWeight(2);
    p.fill(155,20,155);
    // p.line(0, 0, pos.x, pos.y);
    p.ellipse(pos.x, pos.y, 10, 10);
    // pos.x = x;
    // pos.y = y;
    // p.pop();
  }
};
