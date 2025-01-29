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

  // Green circle with white outline
  fill(120, 100, 80); // Green color
  stroke(0, 0, 100); // White stroke
  strokeWeight(8); // Stroke thickness
  ellipse(1200, 200, 300, 300); // Position and size of the circle
  
  // Constructing a star using triangles
  noStroke(); // No border for the triangles
  fill(0, 100, 80); // Red color for the star

  // Define coordinates for the star based on the visual input
  const points = [
    { x: 1200, y: 130 }, // Top point
    { x: 1160, y: 230 }, // Left top
    { x: 1130, y: 270 }, // Left bottom
    { x: 1200, y: 250 }, // Bottom center
    { x: 1270, y: 270 }, // Right bottom
    { x: 1240, y: 230 }  // Right top
  ];

  // Draw triangles from center to create star points
  for (let i = 0; i < points.length; i++) {
    let nextIndex = (i + 1) % points.length;
    triangle(
      1200, 200,
      points[i].x, points[i].y,
      points[nextIndex].x, points[nextIndex].y
    );
  }
}


