const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload() {
backgroundImage = loadImage("images/Background.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(400,350,200);
  monster = new Monster(1180,400,300);
  ground = new Ground(600, 600, 1200, 20);
  sling = new Fly(hero.body, { x: 400, y: 350 });

  
  Block1 = new Block(700, 185, 50, 50);
  Block2 = new Block(700, 255, 50, 50);
  Block3 = new Block(700, 325, 50, 50);
  Block4 = new Block(700, 395, 50, 50);
  Block5 = new Block(700, 465, 50, 50);
  Block6 = new Block(700, 535, 50, 50);
  Block7 = new Block(700, 605, 50, 50);


  Block8 = new Block(940, 240, 50, 50);
  Block9 = new Block(940, 310, 50, 50);
  Block10 = new Block(940, 380, 50, 50);
  Block11 = new Block(940, 450, 50, 50);
  Block12 = new Block(940, 520, 50, 50);
  Block13 = new Block(940, 590, 50, 50);

  Block14 = new Block(860, 100, 50, 50);
  Block15 = new Block(860, 170, 50, 50);
  Block16 = new Block(860, 240, 50, 50);
  Block17 = new Block(860, 310, 50, 50);
  Block18 = new Block(860, 380, 50, 50);
  Block19 = new Block(860, 450, 50, 50);
  Block20 = new Block(860, 520, 50, 50);
  Block21 = new Block(860, 590, 50, 50);

  Block22 = new Block(780, 310, 50, 50);
  Block23 = new Block(780, 380, 50, 50);
  Block24 = new Block(780, 450, 50, 50);
  Block25 = new Block(780, 520, 50, 50);
  Block26 = new Block(780, 590, 50, 50);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  //text(mouseX+","+mouseY,20,40);

  hero.display();
  monster.display();
  sling.display();
  ground.display();

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();
  Block21.display();
  Block22.display();
  Block23.display();
  Block24.display();
  Block25.display();
  Block26.display();
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}