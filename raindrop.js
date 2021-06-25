class createDrop{
    constructor(x,y){
      var options={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.1,
          'density':1.0
      }
      this.radius= radius;
      this.rain=Bodies.circle(x, y,radius, options)
      World.add(world, this.rain);
  }
  Rpos(){
      if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
      }
   }

     display(){
         fill(0,0,232);
         ellipseMode(RADIUS);
         ellipse(this.rain.position.x,this.rain.position.y, this.radius, this.radius);
     }
    
  }

