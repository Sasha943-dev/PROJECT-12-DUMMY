
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,carrot,leaves;
var appleImg,carrotImg,leavesImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
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

  background.depth=garden.depth
  background.depth=background.depth-1;

 rabbit.x=mouse.x
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
var select_sprites = Math.round(random(1,3));
  

if(frameCount % 80 == 0 || select_sprites==1 ){
   
    createapples();
}
 else{
     
  createleaves();
  }

  
  drawSprites();
}

function createapples(){

apple = createSprite(390,50,10,10);
apple.scale =0.09;
apple.addImage(appleImg);
apple.velocityY-=10;
apple.x=Math.round(random(20,-370));
apple.lifetime=3;
}

function createleaves(){

  leaves = createSprite(390,50,10,10);
  leaves.scale =0.09;
  leaves.addImage(leavesImg);
  leaves.velocityY-=3;
  leaves.x=Math.round(random(20,370));
  leaves.lifetime=3;
  }
  