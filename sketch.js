var box1;
var ball;
function setup() 

{
  createCanvas(400, 400);

  box1 = new Box();
ball = new Box();
}

function draw() 
{
  background(220);

  box1.show();
  box1.setSpeed(2);

ball.show();
ball.setSpeed(4);
}

