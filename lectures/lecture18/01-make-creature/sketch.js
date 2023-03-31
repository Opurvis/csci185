function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200,200,'yellow');
    makeCreature(500,300,'orange');
    makeCreature(500,100,'blue')

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function makeCreature(x,y,fillColor) {
    //face
    fill(fillColor)
    circle(x, y, 300)
    //left eye
    fill('black')
    ellipse(x-50, y-50, 30, 40)
    //right eye
    ellipse(x+50, y-50, 30, 40)
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'yellow', 'black')
}