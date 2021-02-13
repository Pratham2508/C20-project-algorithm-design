
var box1 , box2


function setup() {
  createCanvas(400,400);
box1 = createSprite(200, 200, 50, 50);
box1.shapeColor = "cyan";

box2 = createSprite(100,100,30,30);
box2.shapeColor = "cyan";

}

function draw() {
  background("black"); 
  
  box1.x = mouseX ;
  box1.y = mouseY ;
  drawSprites();

  if(box1.x - box2.x < box1.width / 2 + box2.width / 2 && box2.x - box1.x < box1.width / 2 + box2.width / 2 && box1.y - box2.y < box1.height / 2 + box2.height / 2 && box2.y - box1.y < box1.height / 2 + box2.height / 2){
    box1.shapeColor = "red";
    box2.shapeColor = "red";
  }

  else{
    box1.shapeColor = "cyan";
    box2.shapeColor = "cyan";
  }
}