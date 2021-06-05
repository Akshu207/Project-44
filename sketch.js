var bridge, bridgeImg;
var floorOld,floorOldImg,treeOld,treeOldImg;
var dirt,dirtImg;
var driedPlant,driedImg;
var cutTree, cutTreeImg;
var cornerBush, cornerBushImg;
var leaves, leavesImg;
var brokenArbor, brokenArborImg;
var fenceOld, fenceOldImg;
var fenceOld2, fenceOld3;
var dirtyPond,brokenFountain, brokenFountainImg;
var benchOld,benchOldImg;
var tree,treeImg, soil, statue, statueImg;
var plantPot,plantPotImg

function preload(){
  floorOldImg  = loadImage("Floor old.jpg");
  treeOldImg = loadImage("tree old.png");
  dirtImg = loadImage("dirt.png");
  driedImg = loadImage("dried plant.png");
  cutTreeImg = loadImage("image.png");
  cornerBushImg = loadImage("corner.png");
  leavesImg = loadImage("leaves.png");
  brokenArborImg = loadImage("preview.png");
  fenceOldImg = loadImage("image-.png"); 
  dImg = loadImage("1.png");
  brokenFountainImg = loadImage("y.png");
  benchOldImg = loadImage("bench.png");
  treeImg = loadImage("tree.png");
  bridgeImg = loadImage("br.png");
  soilImg = loadImage("download.png");
  statueImg = loadImage("statue.png");
  plantPotImg = loadImage("pot.png");

}


function setup() {
  createCanvas(displayWidth, 700);
  
  floorOld =createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  floorOld.addImage(floorOldImg);
  floorOld.scale =1.2
  
  treeOld = createSprite(50,50,50,50)
  treeOld.addImage(treeOldImg);
  treeOld.scale=0.5;
  
  driedPlant = createSprite(900,250,50,50);
  driedPlant.addImage(driedImg);
  driedPlant.scale = 0.2;

  dirt= createSprite(70,100,50,50);
  dirt.addImage(dirtImg);
  dirt.scale=0.5;

  cutTree = createSprite(150,50,50,50);
  cutTree.addImage(cutTreeImg);
  cutTree.scale = 0.6;

  cornerBush = createSprite(200,100,50,50);
  cornerBush.addImage(cornerBushImg);
  cornerBush.scale = 1;
  
  leaves = createSprite(500,90,50,50);
  leaves.addImage(leavesImg);
  leaves.scale = 0.2;

  brokenArbor = createSprite(700,350,100,100);
  brokenArbor.addImage(brokenArborImg);
  brokenArbor.scale = 1.5;

  fenceOld = createSprite(1100,650,100,100);
  fenceOld.addImage(fenceOldImg);
  fenceOld.scale = 1;

  fenceOld2 = createSprite(300,650,100,100);
  fenceOld2.addImage(fenceOldImg);
  fenceOld2.scale = 1;

  fenceOld3 = createSprite(1500,650,100,100);
  fenceOld3.addImage(fenceOldImg);
  fenceOld3.scale = 1;

  dirtyPond = createSprite(800,150,100,100);
  dirtyPond.addImage(dImg);
  dirtyPond.scale =1.9;

  brokenFountain = createSprite(1300,130,100,100);
  brokenFountain.addImage(brokenFountainImg);
  brokenFountain.scale = 1;

  benchOld = createSprite(300,270,50,100);
  benchOld.addImage(benchOldImg);
  benchOld.scale = 1.2;

  tree = createSprite(450,50,20,20);
  tree.addImage(treeImg);
  tree.scale = 1.5;

  bridge = createSprite(900,110,20,20);
  bridge.addImage(bridgeImg);
  bridge.scale = 1.2;

  soil =createSprite(100,400,50,50);
  soil.addImage(soilImg);
  soil.scale = 1;

  statue = createSprite(1150,80,20,20);
  statue.addImage(statueImg);
  statue.scale =0.8;
}

function draw() {
  background("black")
  floorOld.display();
  treeOld.display();
  cutTree.display();
  dirt.display();
  cutTree.display();
  cornerBush.display();
  brokenArbor.display();
  fenceOld.display();
  fenceOld2.display();
  fenceOld3.display();
  dirtyPond.display();
  brokenFountain.display();
  bridge.display();
  leaves.display();

  drawSprites();
}