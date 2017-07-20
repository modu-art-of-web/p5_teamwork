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
      var minX = m.size.x;
      var maxX = m.size.x + m.size.w;
      if(minX < that.position.x  && maxX > that.position.x){
          that.ownerId = i;
          that.acceleration = p5tw.createVector(0, 0);
      }
    });
  };

  // Method to display
  this.display = function() {
    members[this.ownerId].draw(this.position);
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