const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

drops=[];
var maxDrops=100;

var thunder, thunder1, thunder2;

function preload(){
thunder1= loadImage("1.png");
thunder2= loadImage("2.png");
    
}

function setup(){
    var canvas = createCanvas(600,900);
    engine = Engine.create();
    world = engine.world

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    

    umbreall1= new umbrella(200,780);
    
}

function draw(){
background(0)

drops.display();
umbrella1.display();

rand= Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreateFrame=frameCount;
    thunder= createSprite(random(10,370), random(10,30), 10,10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    thunder.scale= random(0.3,0.6);
}


}   

