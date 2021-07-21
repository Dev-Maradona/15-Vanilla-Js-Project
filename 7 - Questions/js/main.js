/* Your Task: Edit this dry code to be a Short hand Code ..  */

/* Variables */
var questBtn = document.getElementsByClassName('question-btn')[0]
var minIcon = document.getElementsByClassName('minus-icon')[0]
var plusIcon = document.getElementsByClassName('plus-icon')[0]
var questText = document.getElementsByClassName('question-text')[0]

var questBtn2 = document.getElementsByClassName('question-btn')[1]
var minIcon2 = document.getElementsByClassName('minus-icon')[1]
var plusIcon2 = document.getElementsByClassName('plus-icon')[1]
var questText2 = document.getElementsByClassName('question-text')[1]

var questBtn3 = document.getElementsByClassName('question-btn')[2]
var minIcon3 = document.getElementsByClassName('minus-icon')[2]
var plusIcon3 = document.getElementsByClassName('plus-icon')[2]
var questText3 = document.getElementsByClassName('question-text')[2]


questBtn.onclick = function() {
    if (minIcon.style.display === "" || minIcon.style.display === "none") {
        minIcon.style.display = "block";
        plusIcon.style.display = "none";
        questText.style.display = "block";
    } else {
        minIcon.style.display = "none";
        plusIcon.style.display = "block";
        questText.style.display = "none";
    }
}

questBtn2.onclick = function() {
    if (minIcon2.style.display === "" || minIcon2.style.display === "none") {
        minIcon2.style.display = "block";
        plusIcon2.style.display = "none";
        questText2.style.display = "block";
    } else {
        minIcon2.style.display = "none";
        plusIcon2.style.display = "block";
        questText2.style.display = "none";
    }
}

questBtn3.onclick = function() {
    if (minIcon3.style.display === "" || minIcon3.style.display === "none") {
        minIcon3.style.display = "block";
        plusIcon3.style.display = "none";
        questText3.style.display = "block";
    } else {
        minIcon3.style.display = "none";
        plusIcon3.style.display = "block";
        questText3.style.display = "none";
    }
}