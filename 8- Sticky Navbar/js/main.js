/* Nav Bar */
var navBar = document.getElementsByTagName('nav')[0]


window.onscroll = function() {
    if(document.documentElement.scrollTop > 200 ) {
        navBar.classList.add('fixed-nav')
    } else {
        navBar.classList.remove('fixed-nav')
    }
    console.log(document.documentElement.scrollTop)
}