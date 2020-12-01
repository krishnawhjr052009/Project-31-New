const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisionHeight = 300;

var particles = [];
 var plinko = [];
 var divisions = [];

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(240,height,480,20);

 for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }

 for(var j=45;j<=width;j=j+50){
   plinko.push(new Plinko(j,75));
 }

 for(var j=25;j<=width;j=j+50){
  plinko.push(new Plinko(j,175));
}

for(var j=45;j<=width;j=j+50){
  plinko.push(new Plinko(j,275));
}

for(var j=25;j<=width;j=j+50){
  plinko.push(new Plinko(j,375));
}
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var i=0;i<plinko.length;i++){
    plinko[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(50,380),10));
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

}
