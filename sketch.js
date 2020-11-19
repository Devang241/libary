var fixedRect, movingRect;

function setup(){
createCanvas(1200,800);
fixedRect =creatgeSprite(400,100,50,80);
fiedRect.shapeColor = "green"
fixedRect.debug = true;
movingRect = createSprite(400,800,80,30);
movingRect.shapeColor ="green";
movingRect.debug = true;

movingRect.velovityY = -5;
fiedRect.velovityY = +5;

}

function draw(){
  background(0,0,0);
  bounceOff(movingRect,fixedRect);
  drawSprite();
}

function bounceOff(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
       && object2.x - object1.x< object2.width/2 +object1.width/2){
           object1.velovityX = object1.velovityX * (-1);
           object2.velovityX = object2.velovityX * (-1)
       }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2){
          object1.velovityY = object1.velovityY * (-1);
          object2.velovityY = object2.velovityY * (-1);
      }   
}
