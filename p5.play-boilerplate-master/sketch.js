var monkey,monkeyimg;
var bg;
var riverimg,movingRiver;
var invisibleGround;
var CrocGroup,LogGroup1,LogGroup2,LogGroup3,LogGroup4,LogGroup5,LogGroup6,LogGroup7,LogGroup8,LogGroup9,twigGroup;

function preload(){
  monkeyimg = loadImage("monkey.png");
  bg = loadImage("a.png");
  riverimg = loadImage("r.png");

  crocodile = loadImage("croc.png");
  log1 = loadImage("1.png");
  log2 = loadImage("2.png");
  log3 = loadImage("3.png");
  twigt = loadImage("4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  movingRiver = createSprite(displayWidth-500,displayHeight-275,displayWidth+displayWidth*10000,displayHeight-175);
  movingRiver.addImage(riverimg);
  movingRiver.velocityX=-5;
  movingRiver.scale=1.55;

  invisibleGround = createSprite(displayWidth-500,displayHeight-500,displayWidth+displayWidth*10000,5);
  invisibleGround.visible = false;

  if(movingRiver.x < 750){
    movingRiver.x=movingRiver.width/1.5;
  }
  monkey = createSprite(displayWidth-750,displayHeight-600,20,20);
  monkey.addImage(monkeyimg);
  monkey.scale=0.45;
  crocGroup = new Group();
  logGroup1 = new Group();
  logGroup2 = new Group();
  logGroup3 = new Group();
  logGroup4 = new Group();
  logGroup5 = new Group();
  logGroup6 = new Group();
  logGroup7 = new Group();
  logGroup8 = new Group();
  logGroup9 = new Group();
  twigGroup = new Group();
}

function draw() {
  background(bg);  
  
  if(movingRiver.x < 500){
    movingRiver.x=movingRiver.width/1.5;
  }
  if(keyDown("space")){
    monkey.velocityY=-5;
  }
  monkey.velocityY+=1;
  monkey.collide(invisibleGround);

  spawnCroc();
  spawnLog1();
  spawnLog2();
  spawnLog3();
  spawnLog4();
  spawnLog5();
  spawnLog6();
  spawnLog7();
  spawnLog8();
  spawnLog9();
  spawnTwig();
  drawSprites();
  
}

function spawnCroc(){
  if(frameCount % 200===0){
    var croc = createSprite(displayWidth,random(displayHeight-350,displayHeight-145),10,10);
    croc.addImage(crocodile);
    croc.velocityX = -10;
    croc.scale=0.5;
    croc.lifetime=displayWidth/10;
    crocGroup.add(croc);

  }
}
function spawnTwig(){
  if(frameCount % 150===0){
    var twig = createSprite(displayWidth,random(displayHeight-350,displayHeight-145),10,10);
    twig.addImage(twigt);
    twig.velocityX = -10;
    twig.scale=0.5;
    twig.lifetime=displayWidth/10;
    twigGroup.add(twig);

  }
}
function spawnLog1(){
  if(frameCount % 100===0){
    var l1 = createSprite(displayWidth,displayHeight-430,10,10);
    l1.addImage(log1);
    l1.velocityX = -10;
    l1.scale=0.5;
    l1.lifetime=displayWidth/10;
    logGroup1.add(l1);

  }
}
function spawnLog2(){
  if(frameCount % 150===0){
    var l2 = createSprite(displayWidth,displayHeight-430,10,10);
    l2.addImage(log2);
    l2.velocityX = -10;
    l2.scale=0.5;
    l2.lifetime=displayWidth/10;
    logGroup1.add(l2);

  }
}
function spawnLog3(){
  if(frameCount % 125===0){
    var l3 = createSprite(displayWidth,displayHeight-430,10,10);
    l3.addImage(log3);
    l3.velocityX = -10;
    l3.scale=0.5;
    l3.lifetime=displayWidth/10;
    logGroup1.add(l3);

  }
}
function spawnLog4(){
  if(frameCount % 100===0){
    var l4 = createSprite(displayWidth,displayHeight-330,10,10);
    l4.addImage(log1);
    l4.velocityX = -10;
    l4.scale=0.5;
    l4.lifetime=displayWidth/10;
    logGroup1.add(l4);

  }
}


function spawnLog5(){
  if(frameCount % 150===0){
    var l5 = createSprite(displayWidth,displayHeight-330,10,10);
    l5.addImage(log2);
    l5.velocityX = -10;
    l5.scale=0.5;
    l5.lifetime=displayWidth/10;
    logGroup1.add(l5);

  }
}


function spawnLog6(){
  if(frameCount % 125===0){
    var l6 = createSprite(displayWidth,displayHeight-330,10,10);
    l6.addImage(log3);
    l6.velocityX = -10;
    l6.scale=0.5;
    l6.lifetime=displayWidth/10;
    logGroup1.add(l6);

  }
}
function spawnLog7(){
  if(frameCount % 100===0){
    var l7 = createSprite(displayWidth,displayHeight-230,10,10);
    l7.addImage(log1);
    l7.velocityX = -10;
    l7.scale=0.5;
    l7.lifetime=displayWidth/10;
    logGroup1.add(l7);

  }
}


function spawnLog8(){
  if(frameCount % 150===0){
    var l8 = createSprite(displayWidth,displayHeight-230,10,10);
    l8.addImage(log2);
    l8.velocityX = -10;
    l8.scale=0.5;
    l8.lifetime=displayWidth/10;
    logGroup1.add(l8);

  }
}


function spawnLog9(){
  if(frameCount % 125===0){
    var l9 = createSprite(displayWidth,displayHeight-230,10,10);
    l9.addImage(log3);
    l9.velocityX = -10;
    l9.scale=0.5;
    l9.lifetime=displayWidth/10;
    logGroup1.add(l9);

  }
}


