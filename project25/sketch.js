
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;



function preload(){
    
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();
    dustbin = new Dustbin(900,570);

    

    
}

function draw(){
    background("white");
    Engine.update(engine);


    
    ground.display();
    paper.display();
    dustbin.display();
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}