// require('./p5tw.js');
// import p5 from 'p5';
// var p5tw = new p5();


// function requireAll(requireContext) {
//   console.log('requireContext : ' + requireContext);
//   return requireContext.keys().map(requireContext);
// }
// var modules = requireAll(require.context("./members", true, /^\.\/.*\.js$/));
// var moduleLength = modules.length;

// import * as modules from './members/'
var Particle = function(position, p5tw, members) {
  this.acceleration = p5tw.createVector(0, 0);
  // this.velocity = p5tw.createVector(p5tw.random(-1, 1), p5tw.random(-1, 0));
  this.velocity = p5tw.createVector(0, 0);
  this.position = position.copy();
  this.lifespan = 255.0;
  this.ownerId = 0;

  

  this.run = function() {
    this.update();
    this.display();
  };

  this.applyForce = function(f) {
    this.acceleration.add(f);
  };


  // Method to update position
  this.update = function(){
    var that = this;

    var f = members[this.ownerId].update(p5tw);
    this.acceleration.add(f)
    that.velocity.add(that.acceleration);
    that.position.add(that.velocity);
    that.lifespan -= 2;

    members.forEach(function(m, i){

      var minX = p5tw.width/members.length * (i);
      var maxX = p5tw.width/members.length * (i+1);
      if(minX < that.position.x  && maxX > that.position.x){
          that.ownerId = i;
          that.acceleration = p5tw.createVector(0, 0);
      }
    });
  };

  // Method to display
  this.display = function() {
    // p5tw.stroke(255, this.lifespan);
    // p5tw.strokeWeight(2);
    // p5tw.fill(127, this.lifespan);
    // p5tw.ellipse(this.position.x, this.position.y, 12, 12);

    // if(this.ownerId === 0){
    //   p5tw.fill(255,0,0, this.lifespan);
    // }else if(this.ownerId === 1){
    //   p5tw.fill(0,255,0, this.lifespan);
    // }else if(this.ownerId === 2){
    //   p5tw.fill(0,0,255, this.lifespan);
    // }
    
    // p5tw.fill(10,52,180, 10);
    // p5tw.rect(members[this.ownerId].size.x, members[this.ownerId].size.y, members[this.ownerId].size.w, members[this.ownerId].size.h);
    
    // for (var i = members.length-1; i >= 0; i--) {
    //   p5tw.fill(members[i].bg[0],members[i].bg[1],members[i].bg[2], members[i].bg[3]);
    //   p5tw.rect(members[i].size.x, members[i].size.y, members[i].size.w, members[i].size.h);
    // }
    members[this.ownerId].draw(this.position);
    // p5tw.ellipse(this.position.x, this.position.y, 12, 12);
  };

  // Is the particle still useful?
  this.isDead = function(){
    if (this.lifespan < 0.0) {
        return true;
    } else {
      return false;
    }
  };
};


export default Particle;


// import { random } from '../../utils';

// export default class Particle {

//     constructor(length, mouse) {
//         this.length = length;
//         this.mouse = mouse;

//         this.velocity = new THREE.Vector3(random(-1, 1), random(-2, 0), random(-2, 2));
//         this.acceleration = new THREE.Vector3(0, -0.05, 0);

//         this.lifespan = 1;
//     }

//     update() {
//         this.lifespan -= 0.009;
//         this.sphere.material.opacity = this.lifespan;

//         this.velocity.add(this.acceleration);

//         this.sphere.position.x += this.velocity.x;
//         this.sphere.position.y += this.velocity.y;
//         this.sphere.position.z += this.velocity.z;
//     }

//     display() {
//         let sphereGeometry = new THREE.SphereGeometry(10, 32, 32),
//             sphereMaterial = new THREE.MeshNormalMaterial({ transparent: true });

//         this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//         this.sphere.material.opacity = 1.0;

//         if (this.mouse) {
//             this.sphere.position.x = this.mouse[0];
//             this.sphere.position.y = this.mouse[1];
//         } else {
//             this.sphere.position.x = 0;
//             this.sphere.position.y = 0;
//         }
//         this.sphere.position.z = 0;
//     }

//     isDead() {
//         return this.lifespan < 0;
//     }
// }