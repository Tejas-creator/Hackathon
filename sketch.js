var player,clickToMute,clickToUnmute,earth = 1,moon = 1000;
var bgImg,moonImg,moonImg,playerImg,earthImg,clickToUnmuteImg,clickToMuteImg;
var bg;


function preload(){

    //player
    playerImg = loadImage("Images/Shuttle.png");

    //mute and unmute icons
    clickToMuteImg = loadImage("Images/ClickToMute.png");
    clickToUnmuteImg = loadImage("Images/ClickToUnmute.png");

    //earth and moon
    earthImg = loadImage("Images/Earth.png");
    moonImg = loadImage("Images/Moon.png");
    
    //loading the image for the background
    bgImg = loadImage("Images/BG.jpg");

}


function setup(){
    var Canvas = createCanvas(displayHeight+200,displayWidth/2-100);

    //making a moving ground for unlimited road side
    bg = createSprite(displayHeight/2,displayWidth/2-900,10,10)
    bg.addImage("bg",bgImg);
    bg.scale = 5;


    //creating the player
    player = createSprite(displayWidth/3 - 100,displayHeight/2,10,10);
    player.addImage("player",playerImg);
    player.scale = 0.5;

    // //creating the earth and moon
    // earth = createSprite(displayHeight/2+434 ,displayWidth/2 - 241,10,10);
    // earth.addImage("earth",earthImg);
    // earth.debug = true;
    // earth.scale = 0.8;


}


function draw(){
    background("red");
    if (bg.y > displayWidth/2+250){
        bg.y = displayWidth/2-920;
        console.log("Changed the Y position of BackGround")
      }

      if(keyCode ===32){
        location.reload();
      }

    movement();
    createEdgeSprites();
    drawSprites();

    textSize(30);
    stroke("red");
    fill("gold");
    text("bg Y = "+bg.y,10,95);
}

function movement(){

//Move Up
        if(keyWentDown(UP_ARROW)){
            bg.velocityY = bg.velocityY + 4;
        }else 
            if(keyWentUp(UP_ARROW)){
                bg.velocityY = 1;
            };

//Move Left
        if(keyWentDown(LEFT_ARROW)){
            bg.velocityX = bg.velocityX + 4;
        }else 
            if(keyWentUp(LEFT_ARROW)){
                bg.velocityX = 0;
            }
            
//Move Left
        if(keyWentDown(RIGHT_ARROW)){
            bg.velocityX = bg.velocityX - 4;
        }else 
            if(keyWentUp(RIGHT_ARROW)){
                bg.velocityX = 0;
            }       


}