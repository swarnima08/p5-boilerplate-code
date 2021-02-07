var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="red";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="red";

}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2
  && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";

  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  console.log(movingRect.x-fixedRect.x);
  console.log(fixedRect.x-movingRect.x);
  drawSprites();
}