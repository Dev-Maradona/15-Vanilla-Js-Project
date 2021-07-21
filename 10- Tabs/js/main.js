/* Variables */
var vision = document.getElementById('vision')
var goals = document.getElementById('goals')
var hs = document.getElementById('hs')

/* Variable of Btns */
var tabBtnHistory = document.getElementsByClassName('tab-btn')[0]
var tabBtnVision = document.getElementsByClassName('tab-btn')[1]
var tabBtnGoals = document.getElementsByClassName('tab-btn')[2]


tabBtnHistory.onclick = function() {
    tabBtnHistory.classList.add('active')
    tabBtnVision.classList.remove('active')
    tabBtnGoals.classList.remove('active')
    goals.classList.remove('active')
    vision.classList.remove('active')
    hs.classList.add('active')
}

tabBtnVision.onclick = function() {
    tabBtnVision.classList.add('active')
    tabBtnHistory.classList.remove('active')
    tabBtnGoals.classList.remove('active')
    goals.classList.remove('active')
    hs.classList.remove('active')
    vision.classList.add('active')
}

tabBtnGoals.onclick = function() {
    tabBtnGoals.classList.add('active')
    tabBtnVision.classList.remove('active')
    tabBtnHistory.classList.remove('active')
    hs.classList.remove('active')
    vision.classList.remove('active')
    goals.classList.add('active')
}