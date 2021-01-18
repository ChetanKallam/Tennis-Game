var bg, plr, comp, ball, boy
  var gameState = "serve";
  var computersscore=0
  var playersscore=0  
var edges1,edges2,edges3,edges4,edges;
var border1,border2,border3,border4,border5,border6
function preload(){
  
  
  
  ballImage=loadImage("ball.png")
racketImage=loadImage("racket.png")
bgImage=loadImage("backround.png")
boy=loadImage("Tennis boy.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  edges=createEdgeSprites();
  bg = createSprite(600,500);
bg.addImage(bgImage);
bg.scale=2.5
  
  plr = createSprite(600,800);
plr.addImage(racketImage);
plr.scale=0.7
//plr.debug=true
plr.setCollider("rectangle",0,0,100,100)

comp = createSprite(600,100);
comp.addImage(boy);
comp.scale=0.35
//comp.debug=true
comp.setCollider("rectangle",0,0,100,100)

ball = createSprite(600,500);
ball.addImage(ballImage);
ball.scale=0.15
//ball.velocityX=random(4,8);
//ball.velocityY=random(10,15);
border1=createSprite(650,910,1100,10);
border1.shapeColor="red"
border1.visible=false;
border2=createSprite(600,45,600,10);
border2.shapeColor="red"
border2.visible=false;
border3=createSprite(150,650,10,500);
border3.shapeColor="red"
border3.visible=false;
border4=createSprite(250,150,10,300);
border4.shapeColor="red"
border4.visible=false;
border5=createSprite(1050,650,10,500);
border5.shapeColor="red"
border5.visible=false
border6=createSprite(950,150,10,250);
border6.shapeColor="red"
border6.visible=false;
}

function draw() {
  background("light green")
  
if (keyDown("space") && gameState=='serve')
{ball.velocityX=random(4,8);
  ball.velocityY=random(15,20);
gameState="play"
}
  
 
 
 
 //console.log(plr.y);
  if(keyDown("up") && plr.y>600) {
    plr.y = plr.y-15;
  }
  if(keyDown("down")) {
    plr.y=plr.y+15;
  }
  if(keyDown("left")) {
    plr.x=plr.x-15;
  }
   if(keyDown("right")) {
    plr.x=plr.x+15;
  }
  
 if (plr.isTouching(ball)) {
  ball.velocityY=Math.round(random(-15,-20));
ball.velocityX=Math.round(random(-1,1));
  }
  
 
  comp.x=ball.x
 //comp.y=Math.round(random(200,80))
  
  

  if(ball.y<100) {
      comp.x=ball.x;
      comp.y=ball.y;
    }

    if(ball.x==600 && ball.y==500 & ball.velocityX===0 && ball.velocityY==0)
    {
      comp.x=ball.x;
      comp.y=100;
      comp.setVelocity(0,0);

    }
  
if (comp.isTouching(ball)) {
   ball.velocityY=Math.round(random(15,20));
ball.velocityX=Math.round(random(-1,1));
}
if(ball.collide(border1) || ball.collide(border3) || ball.collide(border5)) 
{
  computersscore=computersscore+1;
  ball.x=600;
  ball.y=500;
 // comp.y=ball.y;
  comp.x=500;
  comp.setVelocity(0,0);
  ball.setVelocity(0,0)
  gameState='serve'
}

if(ball.collide(border2) || ball.collide(border4) || ball.collide(border6)) 
{
  playersscore=playersscore+1;
  ball.x=600;
  ball.y=500;
  //comp.y=ball.y;
  comp.x=500;
  comp.setVelocity(0,0);
  ball.setVelocity(0,0)
  gameState='serve'
}
//ball.bounceOff(plr);
//ball.bounceOff(comp);


//plr.bounceOff(edges[0]);
//edges[0].shapeColor="red"
//plr.bounceOff(edges[1]);
//plr.bounceOff(edges[2]);
//plr.bounceOff(edges[3]);

plr.collide(border1)
plr.collide(border3)
plr.collide(border5)
comp.collide(border2)
comp.collide(border4)
comp.collide(border6)


drawSprites();
textSize(20)
fill("black");
text("Computer score :"+computersscore,110,100);
text("Player score :"+playersscore,110,150)
if(gameState === "serve") {
  textSize(20);
  fill('black');
  text("Press Space To Serve",500,550)
}
}

