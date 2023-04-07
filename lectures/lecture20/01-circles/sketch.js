function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    //calling circle function, xvalue, size
    //want to repeat 5 times
    //y+50 each time

    let counter=0;
    while (counter<5000){
    noFill();
    circle(100, 200+counter*50, 50+counter*50);
    counter +=1;
    }
   
    drawGrid(canvasWidth, canvasHeight);
}
