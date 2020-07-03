var r1,r2;


function setup() {
  createCanvas(800,400);
  r1=createSprite(200, 200, 50, 50);
  r1.shapeColor="white"
  r2=createSprite(400, 200, 50, 50);
  r2.shapeColor="white"
}

function draw() {
  background(0);
  r2.x=World.mouseX
  r2.y=World.mouseY
  if (r2.x - r1.x < r1.width/2 + r2.width/2 
    && r1.x - r2.x < r1.width/2 + r2.width/2 
    && r2.y - r1.y < r1.height/2 + r2.height/2 
    && r1.y - r2.y < r1.height/2 + r2.height/2)
  {
    r1.shapeColor="red"
    r2.shapeColor="red" 
  }
  else
  {
    r1.shapeColor="white"
    r2.shapeColor="white"
  }
  drawSprites();
}