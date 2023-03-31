function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");
    drawCreature()

    

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature() { 
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
    }