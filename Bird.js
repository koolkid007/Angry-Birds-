class Bird extends BaseClass {
    constructor(x, y) {
    super(x,y,50,50,0);
    this.image = loadImage("bird.png"); 
    this.smokeImg = loadImage("smoke.png");
    this.trajectory = [];
  }
    display() {
      /*this.body.position.x = mouseX;
      this.body.position.y = mouseY;*/
      super.display();

     // console.log(this.body.position.x);
      if(this.body.velocity.x > 10 && this.body.position.x > 260) {
        var pos = this.body.position
        var temp = [pos.x, pos.y];
        this.trajectory.push(temp);
        console.log(this.trajectory[0][1]);
      }
        for(var i = 0; i<this.trajectory.length; i++) {
          image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1])
       }
     } 
  };
  