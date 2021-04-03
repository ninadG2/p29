class Rope
{
    constructor(body1, point2)
    {
      var options = {
                      bodyA:body1,
                      pointB:point2,
                      stiffness:0.2,
                      length:300
                    }

        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }

    display()
    {
        var firstpos = this.rope.bodyA.position
        var secpos = this.rope.pointB.position
        push()
        strokeWeight(10)
        line(firstpos.x, firstpos.y, secpos.x, secpos.y)
        pop();
        
    }
}

