// // import {p5tw} from '../p5tw.js';

// function setup(){

// }
// function update(p){

//     var gravity = p.createVector(0, 0.1);
//     var wind = p.createVector(p.random(-1, 1), 0);

//     return gravity.add(wind);

// 	// var mouse = p5tw.createVector(p5tw.mouseX,p5tw.mouseY);
//  //    mover.acceleration = p5.Vector.sub(mouse,mover.position);

//     // Set magnitude of acceleration
//     // mover.acceleration.setMag(p5tw.random(0, 0.9));
//     // mover.velocity.add(mover.acceleration);
//     // mover.velocity.limit(3);
//     // mover.position.add(mover.velocity);
    

// }
// function draw(p){

//   p.stroke(255,0,0, 0.1, 0.1);
//   p.strokeWeight(2);
//   p.fill(255,0,0, 30);
//   // rect(30, 20, 55, 55);
//   // p.strokeWeight(2);
//   // p.fill(127, 0.1);
//   // p.ellipse(10, 20, 12, 12);

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
  this.bg = [0,52,180, 255];

  this.update = function(){
    var gravity = p.createVector(0, 0.1);
    var wind = p.createVector(p.random(-1, 1), 0);

    // return gravity.add(wind);
  }

  this.draw = function(pos) {
    // p.fill(10,52,180, 10);
    // p.rect(size.x, size.y, size.w, size.h);
    p.stroke(255,0,0, 0.1, 0.1);
    p.strokeWeight(2);
    p.fill(255,0,0,);
    p.ellipse(pos.x, pos.y, 3, 3);
  };
}
