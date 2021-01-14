var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 100, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(400, 800,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect2.velocityY = -5;
  rect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(rect2,rect1);
  drawSprites();
}
