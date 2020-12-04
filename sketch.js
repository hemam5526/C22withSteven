const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); // automatically one world will be created
  world = engine.world;

  var options = 
  {
    isStatic: true
  }

  box = Bodies.rectangle(200,390,400,20,options);
  World.add(world,box);


  //console.log(box);
  console.log(box.position.y);
 
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,400,20);

}