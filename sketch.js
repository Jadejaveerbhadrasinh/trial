const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var bird;
var bgImg;
var platform;
var slingshot;

function preload()
{
  bgImg = loadImage("sprites/bg.png")
}

function setup(){
var canvas = createCanvas(1200,400);
myEngine = Engine.create();// create an engine and store it in a myEngine variable.
myWorld = myEngine.world;//create a gaming world having all the rules of physics.

ground = new Ground(600,395,1200,20);
platform = new Ground(130,310,300,150);

box1 = new Box (700,320,70,70);
box2 = new Box (920,320,70,70);
pig1 = new Pig(810,350);
log1 = new Log(810,260,300,PI/2)

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig2 = new Pig(810,220);
log2 = new Log(810,180,300,PI/2);

box5 = new Box(810,160,70,70);
log3 = new Log(760,120,150,PI/4);
log4 = new Log(870,120,150,-PI/4);

bird = new Bird(100,200);
log5 = new Log(100,200,120,PI/2);

slingshot = new Slingshot(bird.body,log5.body);
}

function draw()
{
  background(bgImg);
 
  Engine.update(myEngine);

  ground.display();
 platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display(); 

  bird.display();
  log5.display();
 
  slingshot.display();
 
}
