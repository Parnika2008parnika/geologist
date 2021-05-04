class Stone{
    constructor(x,y,width,height)
	{
    // assign options to the rubber ball
    var options={
    'friction':1,
     'density':1,
     'restitution':0.4

    }
		//this.x=x;
		//this.y=y;
		this.body=Bodies.rectangle(x,y,width,height, options)
		this.width=width;
		this.height=height;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0,0,this.width,this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}