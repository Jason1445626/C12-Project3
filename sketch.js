var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var redLeafImg
var orangeLeafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeleafImg=loadImage("orangeLeaf.png")
  redleafImg=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX
  var selectApples=Math.round(random(1,3))
  if(frameCount % 80 === 0){
    if(selectApples==1){
      createApples();
    }else if(selectApples==2){
      createOrangeLeaf();
      
    }else{
      createRedLeaf();
    }
  }
   
  drawSprites();
}
function createApples(){
  var apple=createSprite(Math.round(random(20,380)),0,20,20)
 apple.addImage(appleImg)
 apple.scale=0.05
 apple.velocityY=2;
 apple.lifetime=800
}
function createOrangeLeaf(){
  var orangeleaf=createSprite(Math.round(random(20,380)),0,20,20)
  orangeleaf.addImage(orangeleafImg)
  orangeleaf.scale=0.05
  orangeleaf.velocityY=2;
  orangeleaf.lifetime=800
}
function createRedLeaf(){
  var redleaf=createSprite(Math.round(random(20,380)),0,20,20)
  redleaf.addImage(redleafImg)
  redleaf.scale=0.05
  redleaf.velocityY=2;
  redleaf.lifetime=800
}