var car,wall
function setup() {
  createCanvas(1600,400);
  car = createSprite(200,10,20,20);
  wall.createSprite(1500,200,20,50);
  car.speed = random(30,95);
  car.weight = random(400,1500);
  car.velocityX = speed;
  car.weight = weight;
}

function draw() {
  background(255,0,255); 
  if (car.isTouching(wall)){
    speed = 0;
  }
  function calculatedeformation();
  drawSprites();
}

function calculatedeformation() {

var Derformation = 0.5*weight*speed*speed/22500

if(Deformation < 80 ) {
 car.shapeColor = "green"
}

if(Deformation > 180 ) {
  car.shapeColor = "red"
 }

 if(Deformation < 180 && > 80 ) {
  car.shapeColor = "red"
 }

}