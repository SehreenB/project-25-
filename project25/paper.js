class Paper{
    constructor(){
        var options ={
           
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.x = 250;
        this.y = 540;
        this.radius =20;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER)
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,33,33);
        pop();
    }
}