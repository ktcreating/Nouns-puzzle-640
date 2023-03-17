var tileSize = 18.75
var world = []
var worldWidth
var worldHeight
var targetX;
var targetY;

function setup() {
  bg1 = loadImage('p1.png'); 
  bg2 = loadImage('p2.png');
  bg3 = loadImage('p3.png');
  bg4 = loadImage('p4.png');
  bg5 = loadImage('p5.png');
  bg6 = loadImage('p6.png');
  bg7 = loadImage('p7.png');
  bg8 = loadImage('p8.png');
  bg9 = loadImage('p9.png');

let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  noStroke();
  
  imageMode(CENTER)
  angleMode(DEGREES);
  rotate1 = 0;
  rotate2 = 270;
  rotate3 = 90;
  rotate4 = 270;
  rotate5 = 270;
  rotate6 = 180;
  rotate7 = 180;
  rotate8 = 90;
  rotate9 = 270;
  
  worldWidth = int(width / tileSize)
  worldHeight = int(height / tileSize)
  for (var x = 0; x < worldWidth; x++) {
    var colum = []
    for (var y = 0; y < worldHeight; y++) {
      if (noise(x * 100, y * 100) > 0.47) {
        colum.push(-1)
      } else {
        colum.push(0)
      }
    }
    world.push(colum)
  }
  console.log(world)
  
   input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

  
function greet() {
  const password = input.value(); 
   if (password == 6549) {
      greeting.html('Congratulations! Puzzle #Noun640  Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}


function draw() {
  background(256);
  targetX = int(mouseX / tileSize)
  targetY = int(mouseY / tileSize) 

push()
  translate(100, 100);
  rotate(rotate1);
  image(bg1, 0, 0, 200, 200);  
  pop();
  
push()
  translate(300, 100);
  rotate(rotate2);
  image(bg2, 0, 0, 200, 200);  
  pop();
  
push()
  translate(500, 100);
  rotate(rotate3);
  image(bg3, 0, 0, 200, 200);  
  pop();
  
push()
  translate(100, 300);
  rotate(rotate4);
  image(bg4, 0, 0, 200, 200);  
  pop();
  
push()
  translate(300, 300);
  rotate(rotate5);
  image(bg5, 0, 0, 200, 200);  
  pop();
  
push()
  translate(500, 300);
  rotate(rotate6);
  image(bg6, 0, 0, 200, 200);  
  pop();
  
push()
  translate(100, 500);
  rotate(rotate7);
  image(bg7, 0, 0, 200, 200);  
  pop();
  
push()
  translate(300, 500);
  rotate(rotate8);
  image(bg8, 0, 0, 200, 200);  
  pop();
  
push()
  translate(500, 500);
  rotate(rotate9);
  image(bg9, 0, 0, 200, 200);  
  pop();
  
}


function keyPressed(){
  if (key == '1'){
    rotate1 += 90}  
  if (key == '2'){
    rotate2 += 90}
  if (key == '3'){
    rotate3 += 90}
  if (key == '4'){
    rotate4 += 90}
  if (key == '5'){
    rotate5 += 90}
  if (key == '6'){
    rotate6 += 90}
  if (key == '7'){
    rotate7 += 90}
  if (key == '8'){
    rotate8 += 90}
  if (key == '9'){
    rotate9 += 90}
  else {}
}
