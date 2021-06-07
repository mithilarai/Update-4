const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hunter,surviver,area;
var runningSurvivor,standingSurvivor,runningSurvivor2,standingSurvivor2;
var bgimage;
var robot;
var runningRobot,runningRobot2;
var walk2;
var brick;
var wall1;
var start;

function preload(){
  runningSurvivor = loadAnimation ("images/surviver/tile000.png","images/surviver/tile001.png","images/surviver/tile002.png"
  ,"images/surviver/tile003.png","images/surviver/tile004.png")

standingSurvivor = loadAnimation("images/surviver/tile009.png")
walk = loadSound ("sound/mixkit-footsteps-in-woods-loop-533.wav")
bgimage = loadImage("images/bg.jpg")
runningSurvivor2 = loadAnimation ("images/surviver2/tile000 (1).png","images/surviver2/tile001 (2).png","images/surviver2/tile002 (1).png"
  ,"images/surviver2/tile003 (1).png","images/surviver2/tile004 (1).png")
  standingSurvivor2 = loadAnimation("images/surviver2/tile005.png")

runningRobot = loadAnimation ("images/robot/robot1.png",
"images/robot/robot2.png",
"images/robot/robot3.png",
"images/robot/robot4.png",
"images/robot/robot5.png",
"images/robot/robot6.png",
"images/robot/robot7.png",
"images/robot/robot8.png")
runningRobot2 = loadAnimation ("images/robot2/robot1.png",
"images/robot2/robot2.png",
"images/robot2/robot3.png",
"images/robot2/robot4.png",
"images/robot2/robot5.png",
"images/robot2/robot6.png",
"images/robot2/robot7.png",
"images/robot2/robot8.png")
walk2 = loadSound("sound/walk of robot.mp3")
brick =loadImage("images/wall2.jpg")

startImg = loadImage("images/space.png")

//gun1 = loadImage("images/gun1.png")
gun2left = loadAnimation("images/gun2left.png")
//gun2 = loadImage("images/gun2.png")
gun2right = loadAnimation("images/gun2right.png")
}



function setup(){
  createCanvas(displayWidth+320,displayHeight-40 );
    // engine = Engine.create();
    // world = engine.world;
    
    surviver = createSprite(870,675,50,50);
    
    surviver.addAnimation ("standing",standingSurvivor)
    surviver.addAnimation ("running",runningSurvivor)
    surviver.addAnimation ("standing2",standingSurvivor2)
    surviver.addAnimation ("running2",runningSurvivor2)
    surviver.scale = 0.5;
    surviver.alpha=0.5;
    robot = createSprite(50,350,50,50);
    robot.scale = 0.75;
    robot.velocityX = 0;
    robot2 = createSprite(850,100,50,50);
    robot2.scale = 0.75;
    robot2.velocityX = 0;
    robot3 = createSprite(1650,350,50,50);
    robot3.scale = 0.75;
    robot3.velocityX = 0;
    robot.addAnimation("running3",runningRobot)
    robot.addAnimation("running4",runningRobot2)
    robot2.addAnimation("running3",runningRobot)
    robot2.addAnimation("running4",runningRobot2)
    robot3.addAnimation("running3",runningRobot)
    robot3.addAnimation("running4",runningRobot2)
    wall1 = createSprite(displayWidth/2+180,460,20,270);
    wall1.shapeColor = "brown";
    wall2 = createSprite(250,540,200,20);
    wall2.shapeColor = "brown";
    wall3 = createSprite(1440,540,200,20);
    wall3.shapeColor = "brown";
    wall4 = createSprite(150,400,20,300);
    wall4.shapeColor = "brown";
    wall5 = createSprite(1540,400,20,300);
    wall5.shapeColor = "brown";
    wall6 = createSprite(500,350,20,300);
    wall6.shapeColor = "brown";
    wall7 = createSprite(1200,350,20,300);
    wall7.shapeColor = "brown";
    wall8 = createSprite(140,250,280,20);
    wall8.shapeColor = "brown";
    wall9 = createSprite(1550,250,280,20);
    wall9.shapeColor = "brown";
    wall10 = createSprite(700,300,20,200);
    wall10.shapeColor = "brown";
    wall11 = createSprite(1000,300,20,200);
    wall11.shapeColor = "brown";
    wall12 = createSprite(850,190,319,20);
    wall12.shapeColor = "brown";
    wall13 = createSprite(175,120,350,20);
    wall13.shapeColor = "brown";
    wall14 = createSprite(1510,120,350,20);
    wall14.shapeColor = "brown";
    //wall4.alpha=0.2;
  
    radar=createSprite(robot.x,robot.y,150,150)
    radar.setCollider("circle",0,0,75)
  
    radar.debug=true;
   radar.visible=false; 
    radar2=createSprite(robot2.x,robot2.y,150,150)
    radar2.setCollider("circle",0,0,75)
  
    radar2.debug=true;
    radar2.visible=false; 
    radar3=createSprite(robot3.x,robot3.y,150,150)
    radar3.setCollider("circle",0,0,75)
  
    radar3.debug=true;
    radar3.visible=false; 
    gameState = "serve";
    spritegun1=createSprite(robot.x+30,robot.y,50,50)
    spritegun1.addAnimation("right",gun2right)
    spritegun1.addAnimation("left",gun2left)

    spritegun1.scale=0.1;
    spritegun1.visible= false
    surviver.debug=true;
    surviver.setCollider("rectangle",0,0,100,175)
    start2 = createSprite(840,365,1700,760)
    start2.shapeColor="white"
    start = createSprite(840,365,1700,760)
    start.addImage(startImg)
    start.scale=0.5;
    start.shapeColor="wihte"
    createEdgeSprites();
    //surviver.collide(edges)
camo2 =createSprite(870,645,260,150)
    camo2.visible = false;
  camo2.debug = true;
 





}

function draw(){
   background(bgimage);
 
//  if( surviver.x<=5||surviver.x>=1680){
//    surviver.velocityX=0;
//    surviver.velocityY=0;
//  }

// if (robot.velocityX<=3){
//   spritegun1.x = robot.x -30;
//   spritegun1.changeImage(gun2)
// }
// spritegun1.x = robot.x+30;
// spritegun1.y= robot.y;

if(surviver.isTouching(radar)){
  if(surviver.x>radar.x)
  {
    robot.changeAnimation("running3",runningRobot)
    robot.x= surviver.x-90;
    robot.y=surviver.y;
    spritegun1.visible= true;
    spritegun1.x = robot.x +30;
    spritegun1.y = robot.y
    spritegun1.addAnimation("right",gun2right)
  }
  
  else{
    robot.changeAnimation("running4",runningRobot)
    robot.x= surviver.x+90;
    robot.y=surviver.y;
    spritegun1.visible= true;
    spritegun1.x = robot.x -30;
    spritegun1.y = robot.y
    spritegun1.changeAnimation("left",gun2left)
  }
  

}


if(surviver.isTouching(radar2)){
 
  robot2.x= surviver.x-90;
  robot2.y=surviver.y;
}
if(surviver.isTouching(radar3)){
 
  robot3.x= surviver.x-90;
  robot3.y=surviver.y;
}
// if (surviver.velocityX === 8&& robot3.x===surviver.x-90 ){
//   robot3.changeAnimation("running3",runningRobot)
// }
// if (surviver.velocityX === 8&& robot3.x===surviver.x-90 ){
//  // robot3.changeAnimation("running3",runningRobot)
//  robot3.x= surviver.x+90;
// }

   console.log(robot.y)
   radar.x=robot.x;
   radar.y=robot.y;
   radar2.x=robot2.x;
   radar2.y=robot2.y;
   radar3.x=robot3.x;
   radar3.y=robot3.y;
if(robot.velocityX===-5)
{
  robot.changeAnimation("running4",runningRobot2)

}
if(robot.velocityX===5)
{
  robot.changeAnimation("running3",runningRobot)
}
if(robot2.velocityX===-5)
{
  robot2.changeAnimation("running4",runningRobot2)
}
if(robot2.velocityX===5)
{
  robot2.changeAnimation("running3",runningRobot)
}
if(robot3.velocityX===-5)
{
  robot3.changeAnimation("running4",runningRobot2)
}
if(robot3.velocityX===5)
{
  robot3.changeAnimation("running3",runningRobot)
}
   surviver.collide(wall1)
   surviver.collide(wall2)
   surviver.collide(wall3)
   surviver.collide(wall4)
   surviver.collide(wall5)
   surviver.collide(wall6)
   surviver.collide(wall7)
   surviver.collide(wall8)
   surviver.collide(wall9)
   surviver.collide(wall10)
   surviver.collide(wall11)
  surviver.collide(wall12)
   surviver.collide(wall13)
   surviver.collide(wall14)
 
   
   
 // radar1.display();
   if(gameState === "serve"){
     textSize(60);
     fill("black")
     text("PRESS SPACE BAR TO START ",500,150)
   }
   if(keyDown("space") && gameState === "serve"){
    robot2.velocityX = 5; 
    robot.velocityY = 5;
    robot3.velocityY = 5; 
    gameState = "play"
  }
   
   if(gameState==="play"){
 start.visible=false;
 start2.visible=false;
  if(robot2.x === 1090 && robot2.y === 100 ){
    robot2.velocityX = 0;
    robot2.velocityY = 5;
  }
  // if (robot2.x === 1090&& robot2.y===583){
  //   robot2.velocityY = 0
  //   robot2.velocityX= -9
  //   robot2.changeAnimation("running4",runningRobot2)
  // }
  if (robot2.x === 1090&& robot2.y>=583){
    robot2.velocityY = 0
    robot2.velocityX= -5
    //robot2.changeAnimation("running4",runningRobot2)
  }
  if (robot2.x <= 930&& robot2.y>=583){
    robot2.velocityY = -5
    robot2.velocityX= 0
    //robot2.changeAnimation("running4",runningRobot2)
  }
  if(robot2.x===930&& robot2.y<=260&&robot2.y>=110){
    robot2.velocityY = 0;
    robot2.velocityX=-5;
  }
  if (robot2.x<=760&&robot2.y===260&&robot2.x>=590){
    robot2.velocityX=0;
    robot2.velocityY=5;
  }
  if (robot2.x===760&&robot2.y>=500){
    robot2.velocityY=0;
    robot2.velocityX=-5;
  }
  if(robot2.x<=580&&robot2.y===500){
    robot2.velocityX=0;
    robot2.velocityY=-5;
  }
  if(robot2.x===580&&robot2.y<=100){
    robot2.velocityY=0;
    robot2.velocityX=5
  }
  //of robot1 AI
  if(robot.x===50&&robot.y>=620){
    robot.velocityY=0;
    robot.velocityX=5;
  }
  if(robot.x>=400&&robot.y===620&&robot.x<=401){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===400&&robot.y<=480&&robot.y>=100){
    robot.velocityY=0;
    robot.velocityX=-5;
  }
  if(robot.x<=200&&robot.y===480&&robot.x>=60){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===200&&robot.y<=325&&robot.y>=210){
    robot.velocityY=0;
    robot.velocityX=5;
  }
  if(robot.x>=330&&robot.y===325&&robot.x<=540){
    robot.velocityY=-5;
    robot.velocityX=0;
  }
  if(robot.x===330&&robot.y<=180&&robot.y>=100){
    robot.velocityY=0;
    robot.velocityX=-5;
  }
  if(robot.x<-35){
    robot.x=0;
    robot.y=50;
    robot.velocityX=5;
  }
  if(robot.x>=560&&robot.y===50){
    robot.velocityX=0;
    robot.velocityY=5;
  }
  if(robot.x===560&&robot.y>=620){
    robot.velocityY=0
    robot.velocityX=-5;
  }


  //Ai for robot3 
if(robot3.x===1650&&robot3.y>=600){
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1250&&robot3.y===600&&robot3.x>=1250){
  robot3.velocityX=0
  robot3.velocityY=-5;
}
if(robot3.x===1250&&robot3.y<=480&&robot3.y>60){
robot3.velocityY=0;
robot3.velocityX=5;
}
if(robot3.x>=1480&&robot3.y===480&&robot3.x<1640){
  robot3.velocityY=-5;
  robot3.velocityX=0;
}
if(robot3.x===1480&&robot3.y<=320&&robot3.y>190){
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1300&&robot3.y===320&&robot3.x>1120){
  robot3.velocityY=-5;
  robot3.velocityX=0
}
if(robot3.x===1300&&robot3.y<=180&&robot3.y>=60){
  robot3.velocityY=0;
  robot3.velocityX=5
}
if(robot3.x>=1800&&robot3.y===180){
  robot3.x=1690;
  robot3.y=50;
  robot3.velocityX=-5;
  robot3.velocityY=0;
}
if(robot3.x<=1110&&robot3.y===50){
  robot3.velocityX=0;
  robot3.velocityY=5;
}
if(robot3.x===1110&&robot3.y>=600){
  robot3.velocityY=0;
  robot3.velocityX=5;
}
  // if(robot.x<=400&&robot.y===610&&robot.x<=550){
  //   robot.velocityY=-5;
  //   robot.velocityX=0;
  // }
  
  
  
  
   if (keyWentDown(RIGHT_ARROW)){
       surviver.velocityX = 8;
       surviver.changeAnimation("running2",runningSurvivor2);
       walk.play();
   }
   if (keyWentUp(RIGHT_ARROW)){
    surviver.velocityX = 0;
    surviver.changeAnimation("standing2",standingSurvivor2);
    walk.stop();
   }
   
   if (keyWentDown(LEFT_ARROW)){
    surviver.velocityX =- 8;
    surviver.changeAnimation("running",runningSurvivor);
    walk.play();
   

}
if(keyWentUp(LEFT_ARROW)){
    surviver.velocityX =0;
    surviver.changeAnimation("standing",standingSurvivor);
    walk.stop();
   }

   if (keyWentDown(UP_ARROW)){
    surviver.velocityY = -8;
    surviver.changeAnimation("running2",runningSurvivor2);
    walk.play();
}
if (keyWentUp(UP_ARROW)){
 surviver.velocityY = 0;
 surviver.changeAnimation("standing2",standingSurvivor2);
 walk.stop();
}
if (keyWentDown(DOWN_ARROW)){
  surviver.velocityY = 8;
  surviver.changeAnimation("running2",runningSurvivor2);
  walk.play();
}
if (keyWentUp(DOWN_ARROW)){
surviver.velocityY = 0;
surviver.changeAnimation("standing2",standingSurvivor2);
walk.stop();
}
   }
   fill(116,130,104,150)
   rectMode(CENTER)
   noStroke()
   rect(870,645,260,150)
   fill(100,210,50,100)
   noStroke()
 ellipse(robot.x,robot.y,150,150)
 ellipse(robot2.x,robot2.y,150,150)
 ellipse(robot3.x,robot3.y,150,150)
drawSprites();
textSize(50);
fill("black")
  text (mouseX+":"+mouseY+":"+surviver.x+":"+surviver.y,720,70)
  
}
function keyPressed(){
 
}