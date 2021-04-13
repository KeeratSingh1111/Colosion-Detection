var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200,200,50,80);
 movingRect = createSprite(300,200,20,50);
 movingRect.shapeColor = "red";
 fixedRect.shapeColor = "red";
}

function draw() {
  background("black");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //1st for right direction
  //2nd for left
  //3rd for up
  //4th for down
  if(  movingRect.x-fixedRect.x < fixedRect.width/2 +movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2 +movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 +movingRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2 +movingRect.height/2

    ){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  }
  else{movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  }
  
  drawSprites();
}