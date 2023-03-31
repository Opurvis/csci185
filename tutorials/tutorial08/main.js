function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    //noStroke();
    const fillColor = document.querySelector('#color').value;
    fill(fillColor);
    const outlineColor= document.querySelector('#outline').value;
    stroke(outlineColor);
    const brushSize = document.querySelector('#size').value
    const shape = document.querySelector('#shape').value;
   
 
    
   

    if (shape==='circle'){
      circle(mouseX, mouseY, brushSize);  
    } else if(shape==='square'){
      square(mouseX, mouseY, brushSize);  
    }
    else {
       triangle(
        mouseX, mouseY-brushSize/2, // first point {top}
        mouseX-brushSize/2, mouseY+brushSize/2, // second point {right}
        mouseX+brushSize/2, mouseY+brushSize/2  // third point {left}
    )  
    }

}

/*
    if user selected circle, draw circle
    if shape===circle
    if else, see if they picked square and then draw square
    if shape=== square
    if else draw a triangle

*/






/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/