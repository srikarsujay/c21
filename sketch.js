var fixedRect,movingRect;
var p1,p2,p3,p4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 30);
  fixedRect.shapeColor = "orange";
  movingRect = createSprite(100,100,10,80);
  movingRect.shapeColor = "orange";
movingRect.velocityX=3
p1=createSprite(500,300,50,50)
p1.shapeColor="green"

p2=createSprite(500,200,50,50)
p2.shapeColor="green"

p3=createSprite(400,100,50,50)
p3.shapeColor="green"
p3.velocityX=-3
p4=createSprite(500,400,50,50)
p4.shapeColor="green"
}

function draw() {
  background(0); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/*if(istouching(movingRect,p2)) {
  movingRect.shapeColor = "red";
    p2.shapeColor = "red"
} else{
  movingRect.shapeColor = "orange";
  p2.shapeColor = "orange"

}*/
bonceoff(movingRect,p3)
  console.log(movingRect.x);
  drawSprites();
}
