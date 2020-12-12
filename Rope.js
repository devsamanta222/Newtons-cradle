class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
           pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world, this.rope);
    }
   

    display(){
        var ropeAX=this.rope.bodyA.position.x
        var ropeAY=this.rope.bodyA.position.y

        var ropeBX=this.rope.bodyB.position.x+this.offsetX
        var ropeBY=this.rope.bodyB.position.y+this.offsetY
       
            push();

            strokeWeight(2)
            stroke("black")
            fill("black")

           line(ropeAX,ropeAY,ropeBX,ropeBY)
           
            
            pop();
        }
    
    
}