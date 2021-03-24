class Rope
{
constructor(bodyA,pointB)
{
    var op={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
    }
    this.pointB=pointB
    this.rope=Constraint.create(op)
    World.add(world,this.rope)
}

attach(body)
{
    this.rope.bodyA=body;
}

display()
{
    if(this.rope.bodyA)
    {
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        push()
        strokeWeight(3)
        stroke(48,22,8)
       //line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
}
}