import Particle from './particle.js';
// import p5 from 'p5';
// var p5tw = new p5();

function requireAll(requireContext) {
  console.log('requireContext : ' + requireContext);
  return requireContext.keys().map(requireContext);
}
var modules = requireAll(require.context("./members", true, /^\.\/.*\.js$/));

var ParticleSystem = function(p5tw) {
  // p5tw.draw = function(){
  //   console.log('aaaaaaaaa');
  // }
  // this.origin = position.copy();
  this.particles = [];


  var members = [];
  modules.forEach(function(m, i){
    var minX = p5tw.width/modules.length * (i);
    var maxX = p5tw.width/modules.length * (i+1);
    var size = {x:minX,y:0,w:p5tw.width/modules.length,h:p5tw.height};
                  
    members.push(new m.member(p5tw,size));
  });

  this.addParticle = function() {
    // this.particles.push(new Particle(this.origin, p5tw));
    var randOrigin = p5tw.createVector(p5tw.random(0, p5tw.width), p5tw.random(0, p5tw.height));
    this.particles.push(new Particle(randOrigin, p5tw, members));
  };

  this.run = function() {
    for (var i = members.length-1; i >= 0; i--) {
      p5tw.fill(members[i].bg[0],members[i].bg[1],members[i].bg[2], members[i].bg[3]);
      p5tw.rect(members[i].size.x, members[i].size.y, members[i].size.w, members[i].size.h);
    }
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

function fisheye() {
    var min = 0,
            max = 1,
            distortion = 3,
            focus = 0;

    function G(x) {
        return (distortion + 1) * x / (distortion * x + 1);
    }

    function fisheye(x) {
        var Dmax_x = (x < focus ? min : max) - focus,
                Dnorm_x = x - focus;
        return G(Dnorm_x / Dmax_x) * Dmax_x + focus;
    }

    fisheye.extent = function(_) {
        if (!arguments.length) return [min, max];
        min = +_[0], max = +_[1];
        return fisheye;
    };

    fisheye.distortion = function(_) {
        if (!arguments.length) return distortion;
        distortion = +_;
        return fisheye;
    };

    fisheye.focus = function(_) {
        if (!arguments.length) return focus;
        focus = +_;
        return fisheye;
    };

    return fisheye;
}
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