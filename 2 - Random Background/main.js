var colorCode = document.getElementsByClassName('color')[0];
var btn = document.getElementById('btn');


btn.onclick = function() {
    var newColorCode = colorCode.innerHTML = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = newColorCode
}