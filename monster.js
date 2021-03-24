class monster
{
    constructor(x,y,width,height,angle)
    {
        var op={
            density:0.8,
      restitution:0.4,
      friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,op)
        this.width=width;
        this.height=height;
        this.image=loadImage("thanos.png")
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
        image(this.image,0,0,119,160)
        pop();
    }
}