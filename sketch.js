var gameState = "PLAY";




var ghost,ghostImg;
var climber,climberImg;
var window,windowImg;
var tower,towerImg;
var spookySound;
var windowG,climberG,invisibleG;

function preload() {
  
  ghostImg = loadAnimation ("ghost-jumping.png","ghost-standing.png");
  climberImg = loadImage ("climber.png");
  windowImg = loadImage ("door.png");
  towerImg = loadImage ("tower.png");
  spookySound = loadSound ("spooky.wav");
}

  function setup(){
    
    createCanvas (600,600);
    
    
    
    
    
    tower = createSprite (300,300);
    tower.addImage(towerImg);
    tower.scale = 1;
    tower.velocityY=4;
    
    ghost = createSprite (300,300);
    ghost.addAnimation("ghost",ghostImg);
    ghost.scale =0.5;
     
    windowG = new Group();
    climberG = new Group();
    invisibleG = new Group();
  }

function draw(){
  background(0);
  
  if (gameState === "PLAY"){

    spookySound.play();
      if (tower.y > 600){
        tower.y = 300;
      }

      if (keyDown("left")) {
        ghost.x = ghost.x -5;
      }

      if (keyDown("right")) {
        ghost.x = ghost.x +5;
      }
    if (keyDown("space")) {
      ghost.velocityY = -10;
    }
   ghost.velocityY = ghost.velocityY + 1;
    
    
    
      Spawnwindow();

     if (ghost.y >600 || ghost.isTouching(invisibleG)){
       
       gameState = "END";
     }


      drawSprites();
    
  } else if (gameState === "END"){
    
    
    textSize(40)
    fill("red");
    text("GAME OVER",150,300);
    
    
  }
  
  
 
}



function Spawnwindow(){
  if (frameCount % 200 === 0){
    var window = createSprite(100,50);
    window.addImage(windowImg);
    
    
    climber = createSprite(100,100);
    climber.addImage(climberImg);
    
    invisibleBlock=createSprite(100,110,climber.width,10);
    invisibleBlock.visible = true;
    invisibleBlock.debug = true;
    
    window.velocityY =2;
    climber.velocityY = 2;
    invisibleBlock.velocityY = 2;
    
    window.x = Math.round(random(120,540));
    climber.x = window.x;
    invisibleBlock.x = window.x;
    
    climber.depth = window.depth;
    invisibleBlock.depth = window.depth;
    ghost.depth = window.depth + 1;
    
    windowG.add(window);
    climberG.add(climber);
    invisibleG.add(invisibleBlock);
    
    
    
    
    
  }
  
  
  
}

