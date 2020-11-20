var moving , fixed ; 


function setup() {
  createCanvas(1200,500);

  fixed = createSprite(400, 200, 100, 100);
  fixed.shapeColor = "red";
  fixed.debug = true;
  

  moving = createSprite(200,400,200,200);
  moving.shapeColor = "red";
  moving.debug = true;



}

function draw() {
  background(0);
  
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(fixed.x-moving.x < moving.width/2 + fixed.width/2 && 
     moving.x-fixed.x < moving.width/2 + fixed.width/2 &&
     fixed.y-moving.y < moving.height/2 + fixed.height/2 && 
     moving.y-fixed.y < moving.height/2 + fixed.height/2)
     {
      moving.shapeColor = "blue";
      fixed.shapeColor = "blue";
     }

     else {
       moving.shapeColor = "red";
       fixed.shapeColor = "red";
     }


  drawSprites();
}