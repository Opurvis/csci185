function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    //circle(x,y,diameter);
    circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('brown')
    rect(400, 300, 300, 200);

    fill('brown')
    rect(700, 300, 300, 300);

    fill('brown')
    rect(400, 500, 50, 500);

    fill('brown')
    rect(400, 500, 100, 100);

    fill('brown')
    rect(900, 600, 50, 300);

    fill('brown')
    rect(300, 300, 100, 50);

    fill('brown')
    rect(900, 600, 50, 300);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}