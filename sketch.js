const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;


function setup(){
    var canvas = createCanvas(1280,570);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,400,300,20)

    box1 = new Box(480,340,40,60);
  //  box2 = new Box(920,320,70,70);
   // pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(528,340,40,60);
    box4 = new Box(575,340,40,60);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(622,340,40,60);
    box6=new Box(669,340,40,60);
    box7=new Box2(500,290,40,60);
    box8=new Box2(545,290,40,60);
    box9=new Box2(595,290,40,60);
    box10=new Box2(645,290,40,60);
    box11=new Box(525,220,40,60);
    box12=new Box(575,220,40,60);
    box13=new Box(625,220,40,60);
    box14=new Box2(605,150,40,60);
    box15=new Box2(555,150,40,60);
    box16=new Box(585,80,40,60);

    ground2=new Ground(1000,250,200,20);

   box17=new Box3(1050,180,40,60);
   box18=new Box3(1000,180,40,60);
   box19=new Box3(950,180,40,60);
   box20=new Box4(972,110,40,60);
   box21=new Box4(1020,110,40,60);
   box22=new Box3(990,45,40,60);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    launcher1=new Launcher(bird.body,{x:200,y:100});


}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    //box2.display();
    ground.display();
  //  pig1.display();
   // log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    ground2.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    //log4.display();
    //log5.display();

   bird.display();
   launcher1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher1.fly();
}

function keyPressed(){
  if(keyCode===32)
  launcher1.attach(bird.body);
}
