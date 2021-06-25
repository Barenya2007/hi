class umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.radius= radius;
        this.image=loadImage("walking_1.png");
        this.umbrella=Bodies.circle(x, y,radius, options)
        World.add(world, this.umbrella);
    }
    display()
	{	
     imageMode(CENTER);
     ellipseMode(RADIUS)
     image(this.image, 0,0,this.radius, this.radius)
			
	}

}