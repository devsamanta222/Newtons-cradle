class Bob{
    constructor(x,y){
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        
        this.body=Bodies.circle(x,y,40,options)
        World.add(world,this.body)
        

    }
    display(){
        
        strokeWeight(4)
        stroke("blue")
        fill("blue")
    
        push()
        translate(0,0)
        rotate(this.body.angle)

        image(this.image,this.body.position.x,this.body.position.y,20,10)


        
        circle(0,0,40)
        pop()
    }
}