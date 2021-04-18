var gameState, play, level1, level2, level3, level4, level5, map, finance, military
var heath, police, education, otherGames, respect, g1, g2
function preload() {
  doctorr = loadImage('doctor.png')
  engineerr = loadImage('engineer.png')
  policee = loadImage('police.png')
  policee2 = loadImage('police2.png')

  startbg = loadImage('gateway.jpg')
  mapi = loadImage('mapI.png')

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  level1 = createSprite(displayWidth/1.7, displayHeight/6, 50, 50)
  level2 = createSprite(displayWidth/3.4, displayHeight/6, 50, 50)
  level3 = createSprite(displayWidth/5.1, displayHeight/6, 50, 50)
  level4 = createSprite(displayWidth/6.8, displayHeight/6, 50, 50)
  level5 = createSprite(displayWidth/1.7, displayHeight/3, 50, 50)
  intro = createSprite(displayWidth/2, displayHeight/2, 50, 50)

}

function draw() {
  background("yellow");
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;

  gameState = 0
  respect = 0
  wealth = 0

  if(gameState == 0) {
  start();
  }
  
  if(mousePressedOver(police) || mousePressedOver(health) || mousePressedOver(finance) | mousePressedOver(education) || mousePressedOver(military)) {
  level1.visible = true;
  level2.visible = true;
  level3.visible = true;
  level4.visible = true;
  level5.visible = true;
  back = createSprite(displayWidth/34, displayHeight/34, 100, 40)
  if(mousePressedOver(back)) {
    gameState = gameState-1
  }
  gameState = gameState+1
  if(mousePressedOver(police)) {
  police();
    
  }
  if(mousePressedOver(military)) {
  military();
  }
  if(mousePressedOver(intro)) {
  var i = 0;
  bg = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  tbox = createSprite(displayWidth/2, displayHeight/1,5, displayWidth-50, displayHeight-50) ;
  } 
  if(mousePressed()) {
  i = i+1  
  }
  if(i === 0) {
  text("Good Evening sir. I am Marshal Manavendra Singh the chief of the Indian Air Force,", tbox.x, tbox.y)
  marsh = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  }
  if(i === 1) {
  text(" I am Admiral Karambir Singh, the chief of Indian Navy", tbox.x, tbox.y)
  }
  if(i === 2) {
  text("and I am General Manoj Mukund Naravane, the chief of the Indian army.", tbox.x, tbox.y)  
  }
  if(i === 3) {
  text("We are at your service.", tbox.x, tbox.y)  
  }
  if(i === 4) {
  text("It is  our honour to work with you")  
  }
  if(i>4) {
  gameState = 1
  i.destroy  
  }
  }  l
  if(mousePressedOver(level1)) {
   var lm = 0
   tboxi2 = createSprite(displayWidth/1.5, displayHeight/2, displayWidth-50, displayHeight-displayHeight*1/3);
  }
   if(mousePressed()) {
   lm = lm + 1 
   } 
  if(lm === 0) {
  text("Good morning sir. We are facing a trouble in the region 21, near the line of Line of Actual Control ", tboxi2.x, tboxi2.y)  
  }
  if(lm === 1) {
  text("According to the officials, we should increase the no. of soldiers there.", tboxi2.x, tboxi2.y)
  }
  if(lm === 2) {
  text("Well, everything is peaceful around there, but it can prove as an aggravation for China to start an invasion. ", tboxi2.x, tboxi2.y)
  }
  if(lm === 3) {
  cbox = createSprite(displayWidth/4, displayHeight/2, displayWidth-50, displayHeight-displayHeight*1/3) 
  cbox2 = createSprite(displayWidth/8, displayHeight/2, displayWidth-50, displayHeight-displayHeight*1/3)
  text("increase army", cbox.x, cbox.y)
  text("leave as it is", cbox2.x, cbox2.y)
  if(mousePressedOver(cbox)) {
  text("bring 20 men from region 15, will take 5 days", cbox.x, cbox.y)
  text("bring 40 men from region 30, will take 10 days", cbox2.x, cbox2.y)
  if(mousePressedOver(cbox2) && lm === 5) {
  text("after 9 days", displayWidth/2, displayHeight/2)
  if(lm === 6) {
  text("Sir, china has invaded area 20.", tboxi2.x, tboxi2.y)  
  }
  if(lm === 7) {
  textSize(50)
  textFont(Algerian)
  text("MISSION FAILED, RESPECT REDUCED", displayWidth/2, displayHeight/2)
  wealth = wealth-50  
  }
  if(lm > 7) {
  gameState = 1
  lm.destroy  
  }
  }
  if(mousePressedOver(cbox) && lm === 5) {
  text("Sir, the men have reached there succesfully", tbox.x, tbox.y)
  if(lm === 6) {
  text("Now there is no threat to area 20", tbox.x, tbox.y) 
  }
  if(lm === 7) {
  textSize(50)
  textFont(Algerian)
  text("MISSION PASSED, RESPECT INCREASED", displayWidth/2, displayHeight/2)
  respect = respect+1  
  }
  }
  if(lm > 7) {
  gameState = 1
  lm.destroy  
  } 
  }
  if(mousePressedOver(cbox2)) {
  text("after 9 days", displayWidth/2, displayHeight/2)
  }
  if(lm === 5) {
  text("Sir, china has invaded area 20.", tboxi2.x, tboxi2.y)  
  }
  if(lm === 6) {
  textSize = 50
  textFont = Algerian
  text("MISSION FAILED, RESPECT REDUCED", displayWidth/2, displayHeight/2)  
  }
  respect = respect - 50
  if(lm > 6) {
  gameState = 1
  lm.destroy  
  }
  }
  if(mousePressedOver(level2) && mousePressedOver(wealth > 499)){
  tboxi3 = createSprite(displayWidth/1,displayHeight/2, displayWidth-50, displayHeight-50);
  var lm2 = 0;
  }
  if(mousePressedOver(lm1) && mousePressedOver(lm2) < 7) {
  lm2 = lm2+1  
  }
  if(lm2 > 4 && lm2 < 7) {
  if(mousePressedOver(cboxii) || mousePressedOver(cboxii2)) {
  lm2 = lm2  
  }  
  if(lm2 === 0) {
  text("Sir, there is another problem, at LOC pakistan has increased it's forces", tboxi3.x, tboxi3.y)  
  }
  if(lm2 === 1) {
  text("and at LAC China has increased it's force.", tboxi3.x, tboxi3.y)
  }
    if(lm2 === 2) {
  text("and at LAC China has increased it's force.", tboxi3.x, tboxi3.y)
  }
  if(lm2 === 3) {
  text("It is prominent that China and Pakistan has joined forces.", tboxi3.x, tboxi3.y)
  }
  if(lm2 === 4) {
  text("If worse comes to worst, they can easily capture our regions, What should we do.", tboxi3.x, tboxi3.y)
  }
  if(lm2 > 4 && lm2 <8) {
  cboxii = createSprite(displayWidth/1.5, displayHeight/2, 100, 100)
  cboxii2 = createSprite(displayWidth/2.5, displayHeight/2, 100, 100)  
  if(lm2 === 5) {
  text("increase military in China region, takes 10 days", cboxii.x, cboxii.y)
  text("increase military in Pakistan, takes 2 days", cboxii.x, cboxii.y)
  }
  if(mousePressedOver(cboxii) && lm2 === 6) {
  text("try to negotiate with Pakistan", cboxii.x, cboxii.y)
  text("send men back to Pakistan border after things calm down". cboxii2.x, cboxii2.y)
  if(mousePressedOver(cboxii2) && lm2 === 7) {
  textSize(50)
  textFont(Algerian)
  text("after 12 days", displayWidth/2, displayHeight/2)  
  
  }
  if(mousePressedOver(cboxii2) && lm2 === 7) {
  
  }  
  }
  if(mousePressedOver(cboxii2) && lm2 === 6) {
  text("try to negotiate with China", cboxii.x, cboxii.y)
  text("send men back to China border after things calm down". cboxii2.x, cboxii2.y)
  }  
  }
  }
  
  if(mousePressedOver(health)) {
  health();  
  if(mousePressedOver(intro)) {
  var h = 0
  bg2 = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  tbox2 = createSprite(displayWidth/1,2, displayHeight/2, displayWidth-50, displayHeight-displayHeight*1/3)
  ran = createSprite(displayWidth/2, displayHeight/2, 50, 50)  
  if(mousePressed()) {
  h = h+1  
  }
  if(h === 0) {
  text("Good Evening sir. I am Randeep Guleria, the director of AIIMS", tbox.x, tbox.y)
  marsh = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  }
  if(h === 1) {
  text(" I am Harsh Vardhan, the medical plus family welfare minister", tbox.x, tbox.y)
  }
  if(h === 2) {
  text("We are at your service.", tbox.x, tbox.y)  
  }
  if(h === 3) {
  text("It is  our honour to work with you")  
  }
  if(h < 3) {
  gameState = 1
  h.destroy  
  }
  }
  if(mousePressedOver(education)) {
  education();
  if(mousePressedOver(intro)) {
  var e = 0
  bg3 = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  tbox3 = createSprite(displayWidth/1,2, displayHeight/2, displayWidth-50, displayHeight-50)  
  if(mousePressed()) {
  e = e+1  
  }
  if(e === 0) {
  text("Good Evening sir. I am Ramesh Pokhriyal, the minister of education,", tbox.x, tbox.y)
  ahu = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  }
  if(e === 1) {
  text(" I am Manoj Ahuja, the director of CBSE", tbox.x, tbox.y)
  }
  if(e === 2) {
  text("We are at your service.", tbox.x, tbox.y)  
  }
  if(e === 3) {
  text("It is  our honour to work with you")  
  }
  if(e < 3) {
  gameState = 1
  e.destroy  
  }
  }  
  }
  if(mousePressedOver(finacne) ){
  finance();
  if(mousePressedOver(intro)) {
  var f = 0
  bg4 = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  tbox4 = createSprite(displayWidth/1,2, displayHeight/2, displayWidth-50, displayHeight-50)  
  if(mousePressed()) {
  f = f+1  
  }
  if(f === 0) {
  text("Good Evening sir. I am Anurah Thakur, the finance minister,", tbox.x, tbox.y)
  marsh = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  }
  if(f === 1) {
  text(" I am Shri Shaktikanta Das, the RBI governor.", tbox.x, tbox.y)
  }
  if(f === 2) {
  text("We are at your service.", tbox.x, tbox.y)  

  if(f === 3) {
  text("It is  our honour to work with you")  
  }
  if(f < 3) {
  gameState = 1
  f.destroy  
  }
  }  
  }
  }
  
  if(mousePressedOver(play)) {
  gameState = 1  
}
  if(gameState == 1) {
  home();  
  }
  if(mousePressedOver(g1)) {
  g1();  
  
  }
  if(mousePressedOver(g2)) {
  g2();  
  }

   
  drawSprites();
}

function start() {
  background = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  play = createSprite(displayWidth/2, displayHeight/1.5, 100, 50)
  logo = createSprite(displayWidth/2, displayHeight/3, 500, 100)

}
function home() {
  map = createSprite(displayWidth/2, displayHeight/2, 100, 100)
  finance = createSprite(displayWidth/4, displayHeight/4, 100, 100)
  military = createSprite(displayWidth/4, displayHeight/8, 100, 100)
  police = createSprite(displayWidth/8, displayHeight/8, 100, 100)
  health = createSprite(displayWidth/8, displayHeight/4, 100, 100)
  education = createSprite(displayWidth/8, displayHeight/2, 100, 100)
  otherGames =  createSprite(displayWidth/4, displayHeight/2, 100, 100)

  map.addImage("ma", mapi)  
}
function military() {
  mbackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  mImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  mImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)
}
function finance() {
  nbackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  nImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  nImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)
}
function police() {
  pbackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  pImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  pImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)

  pImage.addImage("po", policee)
  pImage2.addImage("po2", policee2)
}
function health() {
  hbackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  hImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  hImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)
}
function education() {
  ebackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  eImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  eImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)
}
function otherGames() {
 g1 = createSprite(displayWidth/8, displayHeight/5, 100, 100)
 g2 = createSprite(displayWidth/8, displayHeight/2.5, 100, 100) 
 g3 = createSprite(displayWidth/16, displayHeight/5, 100, 100)
 g4 = createSprite(displayWidth/16, displayHeight/2.5, 100, 100)
}
function g1() {
var border1 = createSprite(200, 410, 400, 10);
var border2 = createSprite(200, -10, 400, 10);
var border3 = createSprite(410, 200, 10, 400);
var border4 = createSprite(-10, 200, 10, 400);
var security3 = createSprite(280, 360, 15, 15);
var wall10 = createSprite(225, 340, 40, 10);
var wall15 = createSprite(2, 314, 10, 50);
var wall9 = createSprite(170, 350, 10, 50);
var security2 = createSprite(190, 340, 15, 15);
var wall = createSprite(70, 300, 170, 10);
var gate = createSprite(200, 300, 70, 10);
var wall3 = createSprite(330, 300, 170, 10);
var thief = createSprite(20, 390, 15, 15);
var laser1 = createSprite(100, 145, 200, 10);
var laser2 = createSprite(300, 145, 200, 10);
var wall4 = createSprite(80, 10, 150, 10);
var wall5 = createSprite(320, 10, 150, 10);
var gate2 = createSprite(200, 10, 70, 10);
var wall6 = createSprite(40, 365, 10, 70);
var security = createSprite(80, 365, 15, 15);
var wall7  = createSprite(120, 365, 10, 70);
var wall8 = createSprite(75, 395, 80, 10);
var wall11 = createSprite(250, 330, 10, 50);
var wall12 = createSprite(250, 390, 50, 10);
var wall13 = createSprite(315, 340, 50, 10);
var wall14 = createSprite(345, 370, 10, 70);
var diamond = createSprite(380, 30, 20, 20);
var key1 = createSprite(375, 370, 20, 20);
security.shapeColor = "red";
security.velocityY = -2;
laser1.velocityY = 2;
security.velocityY = -2;
security2.velocityY = 2;
security3.velocityX = 2;
key1.shapeColor = "yellow";
laser2.velocityY = -2;
wall.shapeColor = "red";
wall3.shapeColor = "red";
wall4.shapeColor = "red";
wall5.shapeColor = "red";
wall6.shapeColor = "red";
wall7.shapeColor = "red";
wall8.shapeColor = "red";
wall9.shapeColor = "red";
wall10.shapeColor = "red";
wall11.shapeColor = "red";
wall12.shapeColor = "red";
wall13.shapeColor = "red";
wall14.shapeColor = "red";
wall15.shapeColor = "red";
security2.shapeColor = "red";
security3.shapeColor = "red";
diamond.shapeColor = "pink";
gate.shapeColor = "red";
gate2.shapeColor = "red";
laser1.shapeColor = "red";
laser2.shapeColor = "red";
thief.shapeColor = "white";
  if (thief.isTouching(diamond)) {
    gate2.destroy();
  }
  if (security2.y > 385) {
    security2.velocityY = -2;
  }
  if (thief.isTouching(laser2)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390
  }
  if (thief.isTouching(laser1)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390 
  }
  if (thief.isTouching(gate)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390 
  }
  if (thief.isTouching(security)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390 
  }
  if (thief.isTouching(wall)) {
    thief.x=20
    thief.y=390                                
  }
  
  if (thief.isTouching(wall3)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall8)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall14)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall13)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall12)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall15)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall11)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall10)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall9)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall7)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall6)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall5)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(wall4)) {
    thief.x=20
    thief.y=390                                
  }
  if (thief.isTouching(security3)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390 
  }
  if (thief.isTouching(security2)) {
  thief.velocityX = 0
  thief.velocityY = 0
  textSize(50);
  textFont("algerian");
  fill("white");
  text("Thief Caught", 25, 200);
   thief.x=20
    thief.y=390 
  }
  security.bounceOff(wall8);
  security.bounceOff(wall);
  laser2.bounceOff(wall5);
  laser2.bounceOff(wall3);
  laser1.bounceOff(wall4);
  laser1.bounceOff(wall);
  security3.bounceOff(wall14);
  thief.collide(wall7);
  thief.collide(wall6);
  thief.collide(wall8);
  thief.collide(wall5);
  thief.collide(wall4);
  thief.collide(wall3);
  thief.collide(wall);
  thief.collide(border1);
  thief.collide(border2);
  thief.collide(border3);
  thief.collide(border4);
  security2.bounceOff(gate);
  security3.bounceOff(wall9);
  if (thief.isTouching(security)) {
    textSize(50);
    textFont("algerian");
    fill("white");
    text("Thief Caught", 25, 200);
    thief.velocityX = 0;
    thief.velocityY = 0;
    security.velocityY = 0;
  }
  if (keyWentDown("left") || keyWentDown("right")) {
    thief.velocityX = 0;
  }
  if (keyWentDown("left")) {
    thief.velocityX = -3;
    thief.velocityY = 0;
  }
  if (keyWentDown("space")) {
    thief.velocityX = 0;
    thief.velocityY = 0;
  }
  if (keyWentDown("right")) {
    thief.velocityX = 3;
    thief.velocityY = 0;
  }
  if (keyWentDown("up")) {
    thief.velocityY = -3;
    thief.velocityX = 0;
  }
  if (keyWentDown("down")) {
    thief.velocityY = 3;
    thief.velocityX = 0;
  }
  if (thief.isTouching(key1)) {
    gate.destroy();
    security.destroy();
    security2.destroy();
    security3.destroy();
  }
  if (thief.isTouching(diamond)) {
    thief.velocityX = 0;
    thief.velocityY = 0;
    fill("WHITE");
    textFont("algerian");
    textSize(50);
    text("DIAMOND STOLEN", 0, 200);
    laser1.velocityY = 0;
    laser2.velocityY = 0;
  }
}


function g2() {
var score = 0;
var sophia = createSprite(372.5, 350, 10, 10);
var border6 = createSprite(80, 1, 70, 2);
var border1 = createSprite(395, 200, 20, 400);
var border2 = createSprite(160, 395, 325, 30);
var border3 = createSprite(340, 5, 440, 30);
var border4 = createSprite(5, 200, 70, 400);
var border5 = createSprite(380, 135, 40, 290);
var start = createSprite(370, 370, 30, 20);
var wall1 = createSprite(50, 70, 20, 100);
var wall2 = createSprite(90, 70, 20, 100);
var wall3 = createSprite(90, 150, 100, 20);
var wall4 = createSprite(210, 110, 115, 20);
var wall5 = createSprite(170, 190, 20, 100);
var wall6 = createSprite(130,90,20,80);
var wall7 = createSprite(175,30,100,20);
var wall8 = createSprite(210,70,100,20);
var wall9 = createSprite(207.5, 270, 100, 20);
var wall10 = createSprite(295, 70, 20, 100);
var wall11 = createSprite(250, 150, 100, 20);
var wall12 = createSprite(130, 230, 20, 110);
var wall13 = createSprite(250, 230, 115, 20);
var wall14 = createSprite(210, 190, 20, 20);
var wall15 = createSprite(270, 190, 60, 20);
var wall16 = createSprite(290, 320, 20, 120);
var wall17 = createSprite(250, 340, 20, 80);
var wall18 = createSprite(170, 310, 110, 20);
var wall19 = createSprite(170, 360, 100, 40);
var wall20 = createSprite(90, 320, 20, 120);
var wall21 = createSprite(70, 230, 60, 20);
var wall22 = createSprite(50, 320, 20, 120);
var wall23 = createSprite(70, 190, 60, 20);
var wall24 = createSprite(340, 190, 40, 100);
var wall25 = createSprite(340, 270, 40, 20);
var wall26 = createSprite(340, 340, 40, 80);
var wall27 = createSprite(340, 40, 40, 40);
var wall28 = createSprite(340, 100, 40, 40);
var ending = createSprite(70, 30, 20, 20);
border1.shapeColor = 'red';
border2.shapeColor = 'red';
border3.shapeColor = 'red';
border4.shapeColor = 'red';
border5.shapeColor = 'red';
start.shapeColor = 'green';
sophia.shapeColor='Blue';
wall1.shapeColor='purple';
wall2.shapeColor = 'purple'
wall3.shapeColor = 'purple'
wall4.shapeColor = 'purple'
wall5.shapeColor = 'purple'
wall6.shapeColor = 'purple'
wall7.shapeColor = 'purple'
wall8.shapeColor = 'purple'
wall9.shapeColor = 'purple'
wall10.shapeColor = 'purple'
wall11.shapeColor = 'purple'
wall12.shapeColor = 'purple'
wall13.shapeColor = 'purple'
wall14.shapeColor = 'purple'
wall15.shapeColor = 'purple'
wall16.shapeColor = 'purple'
wall17.shapeColor = 'purple'
wall18.shapeColor = 'purple'
wall19.shapeColor = 'purple';
wall20.shapeColor = 'purple';
wall21.shapeColor = 'purple';
wall22.shapeColor = 'purple';
wall23.shapeColor = 'purple';
wall24.shapeColor = 'purple';
wall25.shapeColor = 'purple';
wall26.shapeColor = 'purple';
wall27.shapeColor = 'purple';
wall28.shapeColor = 'purple';
ending.shapeColor = 'blue';
wall27.velocityY = 1;
wall28.velocityX = 1;
wall26.velocityX = 0;
wall26.velocityY = -1;
wall13.velocityX = 1;
wall13.velocityY = 0;
wall14.velocityX = -1;
wall14.velocityY = 0;
wall5.velocityX = 0;
wall5.velocityY = 4;
wall18.velocityX = 2;
wall20.velocityY = 2;
wall25.velocityX = 0.75;
wall24.velocityY = 4;
wall4.velocityX = 1;
wall16.velocityY = -1;
wall6.velocityY = 1;
wall8.velocityX = 1;
wall1.velocityY = 1;
wall2.velocityY = -1;
border6.shapeColor = "pink";  
 background("pink");
  playSound("sound://category_accent/puzzle_game_accent_a_01.mp3", true);
  wall1.bounceOff(border6);
  wall2.bounceOff(border6);
  wall1.bounceOff(wall3);
  wall2.bounceOff(wall3);
  wall27.bounceOff(wall28);
  wall28.bounceOff(wall10);
  wall27.bounceOff(border3);
  wall28.bounceOff(border5);
  wall8.bounceOff(wall6);
  wall8.bounceOff(wall10);
  wall16.bounceOff(wall13);
  wall4.bounceOff(wall6);
  wall6.bounceOff(wall3);
  wall24.bounceOff(wall28);
  wall25.bounceOff(border5);
  wall24.bounceOff(wall25);
  wall16.bounceOff(border2);
  wall6.bounceOff(wall7);
  wall4.bounceOff(wall10);
  if (wall23.y < 190) {
    wall23.x = 70;
    wall23.y = 190;
    wall23.velocityX = 0.5;
  }
  if (wall23.y > 190) {
    wall23.x = 70;
    wall23.y = 190;
    wall23.velocityX = 0.5;
  }
  if (wall12.x < 130) {
    wall23.velocityX = 0;
  }
  if (wall12.x > 130) {
    wall23.velocityX = 0;
  }
  if (wall12.isTouching(wall3)) {
    wall23.velocityX = -0.5;
  }
  wall23.bounceOff(border4);
  
  wall25.bounceOff(wall16);
  wall23.bounceOff(wall12);
  if (wall20.isTouching(wall21)) {
    wall22.velocityY = 0.5;
  }
  wall22.bounceOff(border2);
  wall22.bounceOff(wall21);
  wall20.bounceOff(wall21);
  wall20.bounceOff(border2);
  if (wall18.isTouching(wall17)) {
    wall19.velocityX = 0.5;
  }
  if (wall12.x < 0) {
    wall12.x = 130;
    wall12.y = 230;
    wall12.velocityY = 0;
    wall12.velocityX = 0;
  }
  if (wall12.x > 400) {
    wall12.x = 130;
    wall12.y = 230;
    wall12.velocityY = 0;
    wall12.velocityX = 0;
  }
  if (wall12.y < 0) {
    wall12.x = 130;
    wall12.y = 230;
    wall12.velocityY = 0;
    wall12.velocityX = 0;
  }
  if (wall12.y > 400) {
    wall12.x = 130;
    wall12.y = 230;
    wall12.velocityY = 0;
    wall12.velocityX = 0;
  }
  wall5.bounceOff(wall9);
  wall5.bounceOff(wall4);
  wall23.bounceOff(wall15);
  wall12.bounceOff(wall18);
  wall12.bounceOff(wall3);
  wall18.bounceOff(wall20);
  wall18.bounceOff(wall17);
  wall19.bounceOff(wall17);
  wall19.bounceOff(wall20);
  if (wall5.isTouching(wall9)) {
    wall12.velocityX = 0;
    wall12.velocityY = 0.5;
  }
  if (wall15.isTouching(wall24)) {
    wall12.velocityX = 0;
    wall12.velocityY = 0.5;
  }
  if (wall15.isTouching(wall14)) {
    wall14.velocityX = -0.5;
    wall15.velocityX = 0.5;
  }
  if (wall15.isTouching(wall24)) {
    wall11.velocityX = 0.5;
    wall11.velocityY = 0;
  }
  if (wall13.isTouching(wall24)) {
    wall15.velocityX = 0.5;
    wall15.velocityY =  0;
  }
  if (wall15.isTouching(wall24)) {
    wall14.velocityX = -0.5;
    wall14.velocityY = 0;
  }
  wall14.bounceOff(wall5);
  wall11.bounceOff(wall24);
  wall11.bounceOff(wall5);
  wall15.bounceOff(wall24);
  wall15.bounceOff(wall14);
  createEdgeSprites();
  sophia.bounceOff(border1);
  sophia.bounceOff(border2);
  sophia.bounceOff(border3);
  sophia.bounceOff(border4);
  wall26.bounceOff(wall25);
  wall13.bounceOff(wall24);
  wall26.bounceOff(edges);
  wall13.bounceOff(wall5);
  if (wall11.isTouching(wall11)) {
    wall11.velocityY = 0;
  }
  if (wall13.isTouching(wall5)) {
    wall13.velocityY = 0;
  }
  if (wall14.isTouching(wall5)) {
    wall14.velocityX = 0;
    wall14.velocityY = 0;
  }
  if (wall13.isTouching(wall24)) {
    wall13.velocityX = 0;
    wall13.velocityY = 0;
  }
  if (wall26.isTouching(wall25)) {
    wall26.velocityY = 0;
  }
  fill("white");
  textSize(20);
  textFont("Algerian");
  text("START", 325, 395);
  text("TARGET", 40, 17.5);
  if (keyDown("UP")) {
    sophia.velocityX = 0;
    sophia.velocityY = -5;
  }
  if (keyDown("w")) {
    sophia.velocityX = 0;
    sophia.velocityY = -2
  }
  if (keyDown("down")) {
    sophia.velocityY = 5;
    sophia.velocityX = 0;
  }
  if (keyDown("s")) {
    sophia.velocityY = 2;
    sophia.velocityX = 0;
  }
  if (keyDown("right")) {
    sophia.velocityX = 5;
    sophia.velocityY = 0;
  }
  if (keyDown("d")) {
    sophia.velocityX = 2
    sophia.velocityY = 0
  }
  if (keyDown("left")) {
    sophia.velocityX = -5;
    sophia.velocityY = 0;
  }
  if (keyDown("a")) {
    sophia.velocityX = -2;
    sophia.velocityY = 0;
  }
  if (sophia.isTouching(wall1)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall2)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall3)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall4)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall5)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall6)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall7)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall8)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall9)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall10)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall12)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall13)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall14)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall15)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall16)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall17)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall18)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall19)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall20)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall21)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall22)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall23)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall24)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall25)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall26)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall27)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  if (sophia.isTouching(wall28)) {
    sophia.x = 375;
    sophia.y = 370;
  }
  drawSprites();
  if (sophia.isTouching(ending)) {
    
    textSize(100);
    text("You Win", 12.5, 200);
  }
  if (keyDown("space")) {
    sophia.velocityX = 0;
    sophia.velocityY = 0;
    textFont("algerian");
    textSize(100);
    text("PAUSE", 50, 200);
  }
  if (sophia.isTouching(edges)) {
    sophia.x = 372.5;
    sophia.y = 350;
  }
}
}
