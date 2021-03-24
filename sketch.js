const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superhero,rassi;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,monstervar;
function preload() {
    backgroundImg = loadImage("sky.jpg");
   monsterimg=loadImage("thanos.png")
}

function setup(){
  engine = Engine.create();
  world = engine.world;
    var canvas = createCanvas(1000,500);

    superhero=new Hero(240,100,200,200);
    rassi=new Rope(superhero.body,{x:290,y:1})

    var ground_op={
        isStatic:true
    }

    ground=Bodies.rectangle(400,380,800,20,ground_op)
    World.add(world,ground)

    monstervar=new monster(740,100,100,160)
   // monster=Bodies.rectangle(710,100,100,100,monster_op)
    //World.add(world,monster)
    box1 = new Box(610, 100, 40, 40);
    box2 = new Box(610, 100, 40, 40);
    box3 = new Box(610, 100, 40, 40);
    box4 = new Box(610, 100, 40, 40);
    box5 = new Box(610, 100, 40, 40);
    box6 = new Box(610, 100, 40, 40);
    box7 = new Box(570, 100, 40, 40);
    box8 = new Box(570, 100, 40, 40);
    box9 = new Box(570, 100, 40, 40);
    box10 = new Box(570, 100, 40, 40);
    box11 = new Box(570, 100, 40, 40);
    box12 = new Box(570, 100, 40, 40);
    box13 = new Box(530, 100, 40, 40);
    box14 = new Box(530, 100, 40, 40);
    box15 = new Box(530, 100, 40, 40);
    box16 = new Box(530, 100, 40, 40);
    box17 = new Box(530, 100, 40, 40);
    box18 = new Box(530, 100, 40, 40);
    box19 = new Box(530, 100, 40, 40);
    box20 = new Box(530, 100, 40, 40);
    b21 = new Box(570, 100, 40, 40);
    b22 = new Box(570, 100, 40, 40);
    b23 = new Box(610, 100, 40, 40);
    b24 = new Box(610,100,40,40)
    b25 = new Box(530, 100, 40, 40);
    b26 = new Box(610, 100, 40, 40);
    b27 = new Box(570, 100, 40, 40);
    b28 = new Box(530, 100, 40, 40);
    b29 = new Box(610, 100, 40, 40);
    b30 = new Box(570, 100, 40, 40);
   
    
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
//imageMode(CENTER)
  //  image(monsterimg,monster.position.x,monster.position.y,100,130)
    superhero.display();
    rassi.display();
    rectMode(CENTER)
    fill(50,50,50)
    stroke("grey")
    strokeWeight(2)
    rect(ground.position.x,ground.position.y,800,20)
    monstervar.display();    
    box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display()
  b29.display();
  b30.display();

 // rect(superhero.body.position.x,superhero.body.position.x,100,100)
}

function mouseDragged() {
  Matter.Body.setPosition(superhero.body, { x: mouseX, y: mouseY });
}