
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var ball1, ball2,ball3,ball4,ball5;
var wood;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,300);
	ball1 = new Ball1 (200,500,20);
	ball2 = new Ball1 (220,500,20);
	ball3 = new Ball1 (240,500,20);
	ball4 = new Ball1 (260,500,20);
	ball5 = new Ball1 (280,500,20);
	wood = new Wood(245,370,150,10);

	rope1 = new SlingShot (ball1.body,wood.body,-80,0);
	rope2 = new SlingShot (ball2.body,wood.body,-40,0);
	rope3 = new SlingShot (ball3.body,wood.body,0,0);
	rope4 = new SlingShot (ball4.body,wood.body,40,0);
	rope5 = new SlingShot (ball5.body,wood.body,80,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  wood.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



