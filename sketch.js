
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var b,l,r;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,50,50,50);
ground = new Ground(400,680,800,20);

b = createSprite(600,650,100,10);
b.shapeColor = "red";

l = createSprite(550,620,10,80);
l.shapeColor = "red";

r = createSprite(650,620,10,80);
r.shapeColor = "red";

}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  

paper.display();
ground.display();

  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 } 
}


