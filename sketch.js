const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,raindrop9,raindrop10,raindrop11

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;;
}

function draw() {
  background(255); 
  background("white")
  for(var num=10;num<800;num=num+30){
    raindrop1=createSprite(num,10,2,30)
    raindrop1.shapeColor="green"
    raindrop1.velocityY=5;
  }
  for(var num=23;num<800;num=num+30){
    raindrop2=createSprite(num,50,2,30)
    raindrop2.shapeColor="green"
    raindrop2.velocityY=5;
  }
  for(var num=12;num<800;num=num+30){
    raindrop3=createSprite(num,90,2,30)
    raindrop3.shapeColor="green"
    raindrop3.velocityY=5;
  }
  for(var num=37;num<800;num=num+30){
    raindrop4=createSprite(num,130,2,30)
    raindrop4.shapeColor="green"
    raindrop4.velocityY=5;
  }
  for(var num=23;num<800;num=num+30){
    raindrop5=createSprite(num,170,2,30)
    raindrop5.shapeColor="green"
    raindrop5.velocityY=5;
  }
  for(var num=93;num<800;num=num+30){
    raindrop6=createSprite(num,210,2,30)
    raindrop6.shapeColor="green"
    raindrop6.velocityY=5;
  }
  for(var num=22;num<800;num=num+30){
    raindrop7=createSprite(num,250,2,30)
    raindrop7.shapeColor="green"
    raindrop7.velocityY=5;
  }
  for(var num=34;num<800;num=num+30){
    raindrop8=createSprite(num,270,2,30)
    raindrop8.shapeColor="green"
    raindrop8.velocityY=5;
  }
  for(var num=48;num<800;num=num+30){
    raindrop9=createSprite(num,310,2,30)
    raindrop9.shapeColor="green"
    raindrop9.velocityY=5;
  }
  for(var num=19;num<800;num=num+30){
    raindrop10=createSprite(num,350,2,30)
    raindrop10.shapeColor="green"
    raindrop10.velocityY=5;
  }
  for(var num=47;num<800;num=num+30){
    raindrop11=createSprite(num,58,2,30)
    raindrop11.shapeColor="green"
    raindrop11.velocityY=5;
  }

  
  drawSprites();
}  