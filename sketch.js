var sprite;
function setup() {
  createCanvas(400,400);
 sprite= createSprite(200,200,20,20);
}

function draw() 
{
  background("green");
  if(keyIsDown(RIGHT_ARROW)){
    sprite.position.x=sprite.position.x+10
  }

  if(keyIsDown(LEFT_ARROW)){
    sprite.position.x=sprite.position.x-10
  }

  
  drawSprites(); 
}




