var ship, shipImg;
var sea, seaImg;
var gameState;

function preload()
{
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup()
{
  createCanvas(900,550)

  //creating the sea
  sea = createSprite(200,200,10,10);
  sea.addImage(seaImg);
  sea.scale = 0.42;
  sea.velocityX = 12;
 // sea.visible = false;

  //creating ship
  ship = createSprite(400,300,10,10);
  ship.addAnimation("s", shipImg);
  ship.scale = 0.3;
  ship.visible = false;

  //gamestate
  gameState = "start";
}

function draw() 
{
  background("cyan");
  //console.log(sea.x);

  drawSprites();

  if(gameState == "start")
  {
    fill("black");
    textSize(30);
    text("Press T to Start",120,200);
    text("Press Space to Boost",120,240);
    text("Press S to Slow",120,280);
    
  }

  if(keyWentDown("t"))
  {
    gameState = "play";
  }

  if(sea.x > 900 )
  {
    sea.x = 0;
  }


  if(gameState =="play")
  {
    //sea.visible = true;
    ship.visible = true;

    if(keyDown("space"))
    {
      sea.velocityX += 2
      //stopping it from over speeding
      if(sea.velocityX>200)
      {
        sea.velocityX = 200;
      }
    }

    if(keyDown("s"))
    {
      sea.velocityX -= 2;

      //stopping it from going in the other direction
      if(sea.velocityX<1)
      {
        sea.velocityX = 0;
      }
    }
  } 
}