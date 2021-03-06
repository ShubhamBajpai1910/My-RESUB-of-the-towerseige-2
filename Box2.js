class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<5){  
        var pos=this.body.position;
        var angle=this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          strokeWeight(5.5);
          stroke("white");
          fill("cyan");
          rect(0,0,this.width,this.height);
         
          pop();
        }
        
        else{
          World.remove(world,this.body);
        }
        
    }
  }
  