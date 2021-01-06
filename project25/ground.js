class Ground{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,1200,15,options);
       this.x = 600;
       this.y = 590;
       this.width = 1200;
       this.height = 15;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        //rotate(angle)
        rectMode(CENTER);
        fill("yellow");
        rect(0,0, this.width, this.height);
        pop();
      }
}