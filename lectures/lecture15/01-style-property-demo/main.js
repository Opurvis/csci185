
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color='white'
}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor ='blue';
}

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor ='pink'
}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor='orange'
}

function multicolor() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section2').style.backgroundColor ='blue';
    document.querySelector('#section2').innerHTML='there';
    document.querySelector('#section4').style.backgroundColor='orange'
    document.querySelector('#section4').innerHTML='hee'
    document.querySelector('#section3').style.backgroundColor ='pink'
    document.querySelector('#section3').innerHTML='tee'
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').innerHTML='Hello';
}