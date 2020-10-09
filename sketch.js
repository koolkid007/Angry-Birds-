const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var box1, pig1;
var chain;
var score = 0;
var gameState = 'onSling';
var bgImg;

function preload() {
    //bgImg = loadImage("bg.png");
    changeBg();

}


function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,100);

    chain = new Chain(bird.body,{x:200,y:100});
    


}

function draw(){
    //background(255);
    if(bgImg) {
      image(bgImg,600,200,1200,400);
    }

    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/

    ground.display();
    platform.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    chain.display();
    changeBg();
    //console.log(chain);
    pig1.score();
    pig3.score();

    strokeWeight(1);
    stroke("white");
    fill("white");
    text("Score: " + score, 1015,30);
   // text(mouseX + " " + mouseY, mouseX, mouseY);
}

function mouseDragged() {
   if(gameState!=='released') {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
   }
}

function mouseReleased() {
    gameState = 'released';
    chain.fly();
}

function keyPressed() {
   if(keyCode === 32 && bird.body.speed < 1) {
     gameState = 'Onsling';  
     bird.trajectory = [];
     Matter.Body.setPosition(bird.body,{x: 200, y: 100});
     bird.body.speed = 0;
     chain.attach(bird.body);
   }  
}


async function changeBg() {
    var x = await fetch("http://worldclockapi.com/api/json/pst/now");
    var y = await x.json();
    var datetime = y.currentDateTime;
    var hours = datetime.slice(11,13);
    console.log(hours);

    if(hours>8 && hours<18) {
        bgImg = loadImage("bg.png");
    }

    else {
        bgImg = loadImage("bg2.jpg");
    }
}