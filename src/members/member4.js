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
  this.bg = [55,30,188, 255];
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
    

    // p.stroke(0,255,0, 0.1, 255);
    // p.strokeWeight(2);
    // p.fill(0,255,0);
    // p.rect(pos.x, pos.y, 10, 10);

    // p.push();
    // p.translate(pos.x, pos.y);
    // p.translate(size.x + size.w/2 , size.y + size.h/2);
    p.stroke(0,0,255, 0.1, 0.1);
    p.strokeWeight(2);
    p.fill(255,255,255);
    p.line(0, 0, pos.x, 0);
    p.ellipse(pos.x, pos.y, 10, 10);
    // pos.x = x;
    // pos.y = y;
    // p.pop();
  }
};
