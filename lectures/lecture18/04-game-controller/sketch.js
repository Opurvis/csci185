let x = 100;
let y = 200;
let width = 50;
let fillColor = 'orange';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);

}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y=y-10;
        console.log ('the user just pressed the up arrow');
    }

    else if (ev.code === 'ArrowDown') {
        y=y+10;
        console.log ('the user just pressed the down arrow');
    }

    else if (ev.code === 'ArrowRight') {
        x=x+10;
        console.log ('the user just pressed the right arrow');
    }

    else if (ev.code === 'ArrowLeft') {
        x=x-10;
        console.log ('the user just pressed the left arrow');
    }

    else if (ev.code === 'Space') {
        width=width+10;
        //shortcut: width+= 10
        console.log ('the user just pressed the space key');
    }

    else if (ev.code === 'Minus') {
        width=width-10;
        console.log ('the user just pressed the minus');
    }

    else if (ev.code === 'KeyB') {
        fillColor='blue';
        console.log ('the user just pressed the "B"');
    }
    else if (ev.code === 'KeyO') {
        fillColor='orange';
        console.log ('the user just pressed the "O" key');
    }
  
    // redraw circle:
    //clear();
    //Fill();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
