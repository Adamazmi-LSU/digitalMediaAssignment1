function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255);  
}

function draw() {
  background(0, 0, 100);  

  // Example 1 
  fill(100, 100, 100);  
  rect(0, 0, 400, 200);
  
  fill(0, 0, 100);  
  circle(100, 100, 150);
  square(200, 25, 150);

  // Example 2 
  noStroke();  

  fill(0, 100, 100, 150);  
  circle(200, 300, 100);

  fill(270, 100, 100, 150);  
  circle(170, 370, 100);

  fill(100, 100, 100, 150);  
  circle(230, 370, 100);

  // Example 3
  fill(0, 100, 0);  
  rect(0, 500, 400, 200);

  fill(60, 100, 100)
  circle(100, 600, 130)

  fill(0, 100, 0);
  triangle(100,600,0,550,0,650)

  fill(0, 100, 100);
  square(240, 570, 100)
  circle(290,580,100)

  fill(0,0,100)
  circle(265,590,30)
  circle(315,590,30)

  fill(240,100,100)
  circle(265,590,15)
  circle(315,590,15)

  // example 4

  square(950,-60,500)

  
  fill(120, 100, 80); 
  stroke(0, 0, 100); 
  strokeWeight(8); 
  ellipse(1200, 200, 300, 300); 
  
  
  stroke(0, 0, 100);
  strokeWeight(3);
  fill(0, 100, 80); 

  
  triangle(1200, 80, 1160, 170, 1240, 170);
  // Bottom left triangle
  triangle(1120, 300, 1200, 260, 1130, 220);
  // Bottom right triangle
  triangle(1280, 300, 1200, 260, 1270, 220);
  // Left triangle
  triangle(1160, 170, 1130, 220, 1075, 170);
  // Right triangle
  triangle(1240, 170, 1270, 220, 1325, 170);
}

