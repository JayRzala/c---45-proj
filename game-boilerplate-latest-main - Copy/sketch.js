var bg_img;
var player,player_img,player_standing;
var zombie,zombie_img;

function preload(){
 bg_img = loadImage("assets/bg.jpeg");
 player_img = loadImage("assets/shooter_3.png");
 zombie_img = loadImage("assets/zombie.png");
player_standing = loadImage("assets/shooter_2.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(player_standing);
player.scale = 0.7;

}

function draw(){

background(bg_img);

movement();

if(keyWentDown("space")){
 
    player.addImage(player_img)
   
  }
  else if(keyWentUp("space")){
    player.addImage(player_standing)
  }

  drawSprites();
}

function movement(){

if(keyDown("UP_ARROW"||touches.length>0)){
    player.y -= 10
}

if(keyDown("DOWN_ARROW"||touches.length>0)){
    player.y += 10
}

if(keyDown("LEFT_ARROW"||touches.length>0)){
    player.x -= 10
}

if(keyDown("RIGHT_ARROW"||touches.length>0)){
    player.x += 10
}
}