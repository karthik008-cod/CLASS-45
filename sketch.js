var Tiger, Deer, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20, M21, M22, M23, M24, M25, M26, M27, M28, M28, M29, M30, M31, M32, M33, M33, M34, M35, M36, M37, M38, M100, M101, M102, M103;
var TigerIMG, DeerIMG
function preload(){
  TigerIMG = loadImage("tiger.png")
  DeerIMG = loadImage("deer.png")
}
function setup(){

  canvas = createCanvas (350, 350);
  //Creating maze by creating 38 sprite objects
  M100 = createSprite(100, 5, 500, 10);
  M101 = createSprite(100, 345, 500, 10);
  M102 = createSprite(345, 100, 10, 500);
  M103 = createSprite(5, 250, 10, 500);
  M1 = createSprite(20, 50, 50, 10);
  M2 = createSprite(100, 50, 50, 10);
  M3 = createSprite(180, 50, 50, 10);
  M4 = createSprite(180, 80, 10, 50);
  M5 = createSprite(10, 200, 50, 10);
  M6 = createSprite(55, 225, 5,5);
  M7 = createSprite(100, 300, 50, 10);
  M8 = createSprite(100, 150, 10, 50);
  M9 = createSprite(150, 200, 50, 10);
  M10 = createSprite(200, 80, 50, 10);
  M11 = createSprite(250, 80, 10, 50);
  M12 = createSprite(320, 100, 50, 10);
  M13 = createSprite(140, 155, 5, 5);
  M14 = createSprite(300, 200, 50, 10);
  M15 = createSprite(300, 170, 10, 50);
  M16 = createSprite(300, 250, 50, 10);
  M17 = createSprite(350, 250, 50, 10);
  M18 = createSprite(180, 180, 10, 50);
  M19 = createSprite(260, 300, 50, 10);
  M20 = createSprite(250, 150, 50, 10);
  M21 = createSprite(225, 150, 10, 50);
  M22 = createSprite(20, 125, 50, 10);
  M23 = createSprite(40, 125, 10, 50);
  M24 = createSprite(100, 125, 50, 10);
  M25 = createSprite(100, 200, 50, 10);
  M26 = createSprite(100, 225, 10, 50);
  M27 = createSprite(77, 255, 55, 10);
  M28 = createSprite(45, 275, 10, 50);
  M29 = createSprite(80, 325, 10, 50);
  M30 = createSprite(180, 320, 10, 50);
  M31 = createSprite(100, 225, 10, 50);
  M32 = createSprite(100, 75, 10, 40);
  M33 = createSprite(100, 225, 10, 50);
  M34 = createSprite(320, 40, 50, 10);
  M35 = createSprite(180, 225, 10, 50);
  M36 = createSprite(165, 250, 40, 10);
  M37 = createSprite(200, 215, 50, 10);
  M38 = createSprite(240, 280, 10, 50);

  //creating PC's
  Tiger = createSprite(25, 25, 20, 20);
  Tiger.addImage("Tiger", TigerIMG)
  Tiger.scale = 0.08
  // if(keyDown("W")){
  //   console.log("w")
  //   Tiger.y = Tiger.y-3;
  // }
  Deer = createSprite(325, 325, 20, 20);
  Deer.addImage("Deer", DeerIMG)
  Deer.scale = 0.08

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Tiger.x = Tiger.x - 10
  }
  if (keyCode === RIGHT_ARROW) {
    Tiger.x = Tiger.x + 10
  }
  if (keyCode === UP_ARROW) {
    Tiger.y = Tiger.y - 10
  }
  if (keyCode === DOWN_ARROW) {
    Tiger.y = Tiger.y + 10
  }
  // complete the following code by using ASCII
  if (keyCode === 65) {
    Deer.x = Deer.x - 9
  }
  if (keyCode === 68) {
    Deer.x = Deer.x + 9
  }
  if (keyCode === 87) {
    Deer.y = Deer.y - 9
  }
  if (keyCode === 83) {
    Deer.y = Deer.y + 9
  }
  // complete the following code by using ASCII



  //COMPLETED
}
function draw() {

  background(200,225,225);
  //START of the code for collide
  Tiger.collide(M1);
  Tiger.collide(M2);
  Tiger.collide(M3);
  Tiger.collide(M4);
  Tiger.collide(M5);
  Tiger.collide(M6);
  Tiger.collide(M7);
  Tiger.collide(M8);
  Tiger.collide(M9);
  Tiger.collide(M10);
  Tiger.collide(M11);
  Tiger.collide(M12);
  Tiger.collide(M13);
  Tiger.collide(M14);
  Tiger.collide(M15);
  Tiger.collide(M16);
  Tiger.collide(M17);
  Tiger.collide(M18);
  Tiger.collide(M19);
  Tiger.collide(M20);
  Tiger.collide(M21);
  Tiger.collide(M22);
  Tiger.collide(M23);
  Tiger.collide(M24);
  Tiger.collide(M25);
  Tiger.collide(M26);
  Tiger.collide(M27);
  Tiger.collide(M28);
  Tiger.collide(M29);
  Tiger.collide(M30);
  Tiger.collide(M31);
  Tiger.collide(M32);
  Tiger.collide(M33);
  Tiger.collide(M34);
  Tiger.collide(M35);
  Tiger.collide(M36);
  Tiger.collide(M37);
  Tiger.collide(M38);
  Tiger.collide(M100);
  Tiger.collide(M101);
  Tiger.collide(M102);
  Tiger.collide(M103);
  // Tiger.collide(Deer);

  //collide for deer
  Deer.collide(M1);
  Deer.collide(M2);
  Deer.collide(M3);
  Deer.collide(M4);
  Deer.collide(M5);
  Deer.collide(M6);
  Deer.collide(M7);
  Deer.collide(M8);
  Deer.collide(M9);
  Deer.collide(M10);
  Deer.collide(M11);
  Deer.collide(M12);
  Deer.collide(M13);
  Deer.collide(M14);
  Deer.collide(M15);
  Deer.collide(M16);
  Deer.collide(M17);
  Deer.collide(M18);
  Deer.collide(M19);
  Deer.collide(M20);
  Deer.collide(M21);
  Deer.collide(M22);
  Deer.collide(M23);
  Deer.collide(M24);
  Deer.collide(M25);
  Deer.collide(M26);
  Deer.collide(M27);
  Deer.collide(M28);
  Deer.collide(M29);
  Deer.collide(M30);
  Deer.collide(M31);
  Deer.collide(M32);
  Deer.collide(M33);
  Deer.collide(M34);
  Deer.collide(M35);
  Deer.collide(M36);
  Deer.collide(M37);
  Deer.collide(M38);
  Deer.collide(M100);
  Deer.collide(M101);
  Deer.collide(M102);
  Deer.collide(M103);
  Deer.collide(Tiger);
  //END of code for collide
   drawSprites();
  

  
}