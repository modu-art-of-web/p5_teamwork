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
  this.bg = [111,30,7, 255];

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
    p.stroke(0,0,255, 255);
    p.strokeWeight(2);
    p.fill(0,0,255);


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
