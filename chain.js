class Chain{
  constructor(bodyA, point) {
    var options ={
       bodyA: bodyA,
       pointB: point,
       stifness: 0.02,
       length: 15
    }  

    this.chain = Constraint.create(options);
    this.image1 = loadImage("sling1.png");
    this.image2 = loadImage("sling2.png");
    this.image3 = loadImage("sling3.png");
    World.add(world,this.chain);
  }
  
  attach(body) {
    this.chain.bodyA = body;
  }

  fly() {
    this.chain.bodyA=null;
  }

  display() {
    imageMode(CENTER);
    image(this.image1,230,160);
    image(this.image2,210,140);
    if(this.chain.bodyA) {
      var posA = this.chain.bodyA.position
      //var posB = this.chain.pointB

      stroke(48,22,8); 
      
      if(posA.x>200) {
        strokeWeight(4)
        line(posA.x,posA.y,200,125);
        line(posA.x,posA.y,236,116);
        image(this.image3, posA.x-15, posA.y+5);
      }

      else if(posA.x<200) {
        strokeWeight(7)
        line(posA.x,posA.y,200,125);
        line(posA.x,posA.y,236,116);
        image(this.image3, posA.x-15, posA.y+5);
      }
    }

  }

}