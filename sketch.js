
var trex ,trex_running;
var ground, ground2;
var invisibleGround 
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")  
ground2 = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  ground = createSprite (200, 180, 400, 20)
  ground.addImage("ground",ground2)
  //create a trex sprite
 trex = createSprite(50,160,30,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 invisibleGround = createSprite(200,190,400,20);
 invisibleGround.visible = false 
}

function draw(){
  background("black")
  if(ground.x<0) {
    ground.x=ground.width/2; 
  }
 if(keyDown("space")){
   trex.velocityY = -8;
 } 
 trex.velocityY = trex.velocityY + 1;

trex.collide (invisibleGround);

 drawSprites();
}
