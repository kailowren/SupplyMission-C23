var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxCentre,boxRight,boxLeft,boxPosition;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

    

	boxPosition = width/2
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	boxCentre = createSprite(boxPosition,650,200,20);
	boxRight = createSprite (boxPosition+90,600,20,100);
	boxLeft = createSprite (boxPosition-90,600,20,100);

	boxCentre.shapeColor = "red";
	boxRight.shapeColor = "red";
	boxLeft.shapeColor = "red";


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	 	//centre = new Ground(600,380,1200,30)
	ground=new Ground(width/2, height-35, width,10);
	
	center =new Ground(boxPosition,650,200,20);
	left =new Ground (boxPosition-90,600,20,100);
	right =new Ground (boxPosition+90,600,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
 // keyPressed();

  left.display();

  //centre.display();
  ground.display ()
  drawSprites();


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}
