import Particle from './particle.js';
// import p5 from 'p5';
// var p5tw = new p5();


var ParticleSystem = function(position, p5tw) {
  // p5tw.draw = function(){
  //   console.log('aaaaaaaaa');
  // }
  this.origin = position.copy();
  this.particles = [];

  this.addParticle = function() {
    // this.particles.push(new Particle(this.origin, p5tw));
    var randOrigin = p5tw.createVector(p5tw.random(0, p5tw.width), p5tw.random(0, p5tw.height));
    this.particles.push(new Particle(randOrigin, p5tw));
  };

  this.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      // if(p.ownerId)
      p.run();
      if (p.isDead()) {
        // console.log(this.particles.length);
        this.particles.splice(i, 1);
      }
    }
  };

  // A function to apply a force to all Particles
  this.applyForce = function(f) {
    for(var i = 0; i < this.particles.length; i++){
      this.particles[i].applyForce(f);
    }
  };

  this.applyRepeller = function(r) {
    for(var i = 0; i < this.particles.length; i++){
      var p = this.particles[i];
      var force = r.repel(p);
      p.applyForce(force);
    }
  };
};

export default ParticleSystem;

// import Particle from './particle';

// export default class ParticleSystem {

//     constructor(page, width, mouse) {
//         this.page = page;
//         this.width = width;
//         this.mouse = mouse;

//         this.particles = [];
//     }

//     addParticle() {
//         let p = new Particle(this.width, this.mouse);
//         p.display();
//         this.page.scene.add(p.sphere);
//         this.particles.push(p);
//     };

//     run() {
//         for (let i = 0; i < this.particles.length; i++) {
//             let particle = this.particles[i];

//             particle.update();

//             if (particle.isDead()) {
//                 this.page.scene.remove(particle.sphere);
//                 this.particles.splice(i, 1);
//                 i -= 1;
//             }
//         }
//     };

// }