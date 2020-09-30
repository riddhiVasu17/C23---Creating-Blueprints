const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1, box2;

function setup() {
  createCanvas(600,400);
 
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new ground(300, 380, 600, 20);

  box1 = new box(300, 200, 20, 20);
  
  box2 = new box(310, 150, 20, 20);

}

function draw() {
  background(0);  

  Engine.update(engine);

  box1.display();
  box2.display();

  ground1.display();

}