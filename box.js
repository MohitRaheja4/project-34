class Box{
    constructor(x,y,width,height,options)
    {
        var op={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,op)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle) 
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")       
        fill("grey")
        rect(0,0,this.width,this.height)
        pop();
    }
}