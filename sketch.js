
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof
var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=createSprite(400,20,600,20);
	bobObject1=new bob(200,300,100,20);
	bobObject2=new bob(300,300,100,20);
	bobObject3=new bob(400,300,100,20);
	bobObject4=new bob(500,300,100,20);
	bobObject5=new bob(600,300,100,20);
	rope1 = new rope (bobObject1.body,roof.body,{offsetX:40,offsetY:0});
	//rope2 = new rope (bobObject1.body,roof.body,bobDiameter*2,0);
	//rope3 = new rope (bobObject1.body,roof.body,bobDiameter*2,0);
	//rope4 = new rope (bobObject1.body,roof.body,bobDiameter*2,0);
	//rope5 = new rope (bobObject1.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  drawSprites();
 
}



