class Hero
{
    constructor(x,y,width,height,angle)
    {
        var op={
            density:1,
            frictionAir:0.0025
        }
        this.body=Bodies.rectangle(x,y,width,height,op)
        this.width=width;
        this.height=height;
        this.image=loadImage("falcon.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,200,200)
        pop();
    }
}