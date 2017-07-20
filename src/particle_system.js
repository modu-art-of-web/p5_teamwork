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
  
  // members = shuffle(members);
  function shuffle(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }


  this.getMemberCount = function(){
    return members.length;
  }

  this.openLink = function(index){
    if(typeof members[index].link !== 'undefined'){
      window.open(members[index].link)
    }
  }

  this.addParticle = function() {
    // this.particles.push(new Particle(this.origin, p5tw));
    var randOrigin = p5tw.createVector(p5tw.random(0, p5tw.width), p5tw.random(0, p5tw.height));
    this.particles.push(new Particle(randOrigin, p5tw, members));
  };

  this.run = function() {
    for (var i = members.length-1; i >= 0; i--) {
      p5tw.stroke(0,0,0,0);
      p5tw.strokeWeight(0);

      // p5tw.fill(255,255,255,255);
      // p5tw.rect(members[i].size.x, members[i].size.y, members[i].size.w, members[i].size.h);
      p5tw.fill(members[i].bg[0],members[i].bg[1],members[i].bg[2], members[i].bg[3]);
      p5tw.rect(members[i].size.x, members[i].size.y, members[i].size.w, members[i].size.h);
      if(typeof members[i].name !== 'undefined'){
        var memberName = members[i].name;
        for(var j=0; j < members[i].name.length; j++){
          memberName = memberName.substring(j,memberName.length-j);
          if(members[i].size.w > p5tw.textWidth(memberName)){
            // textWidth
            if(typeof members[i].textColor !== 'undefined'){
              p5tw.fill(members[i].textColor[0],members[i].textColor[1],members[i].textColor[2], members[i].textColor[3]);
            }else{
              p5tw.fill(255,255,255,255);
            }
            p5tw.textAlign(p5tw.CENTER);
            p5tw.text(memberName, members[i].size.x + (members[i].size.w / 2), members[i].size.y + (members[i].size.h / 5.5));
            // if(i !== members.length-1){
            //   p5tw.fill(members[i+1].bg[0],members[i+1].bg[1],members[i+1].bg[2], members[i+1].bg[3]);
            //   p5tw.rect(members[i+1].size.x, members[i+1].size.y, members[i+1].size.w, members[i+1].size.h);
            // }
            break;
          }
        }
        
      }
    }
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      // if(p.ownerId)
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.setPosX = function(getX, h){
    for (var i = 0, n = members.length; i < n; ++i) {
        var x0 = getX(i * p5tw.width/members.length),
            x1 = getX((i + 1) * p5tw.width/members.length);
                // dx = Math.min(imageWidth, x1 - x0);

        members[i].size.x = x0;
        members[i].size.w = x1 - x0;
        members[i].size.h = h;
    }
  }

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
