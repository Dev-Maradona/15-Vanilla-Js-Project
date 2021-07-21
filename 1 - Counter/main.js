var butttonIncrease = document.getElementsByClassName('increase')[0];
var butttonDecrease = document.getElementsByClassName('decrease')[0];
var butttonReset = document.getElementsByClassName('reset')[0];

var theValue = document.getElementById('value');
var paraBug = document.getElementById('Bug');

butttonIncrease.onclick = function() {
    theValue.style.color = 'green';
    theValue.innerHTML = parseInt(theValue.innerHTML) + 1
    console.log('Decrease')
}

butttonDecrease.onclick = function() {
    // Fix Issue When you Increase than 0
    if (theValue.innerHTML <= 0) {
        paraBug.innerHTML = "You can't Increase than 0"
        paraBug.style.visibility = 'visible';
        
        // After 2 Second the paragraph hidden ..
        setTimeout(() => {
            paraBug.style.visibility = 'hidden';
        }, 2000)

        return false
    }

    theValue.innerHTML = parseInt(theValue.innerHTML) - 1
    console.log('Increase')
}

butttonReset.onclick = function() {
    theValue.style.color = 'black';
    theValue.innerHTML = 0
    console.log('Reset')
}