var theSidebar = document.getElementsByClassName('sidebar')[0];
var toggleBtn = document.getElementsByClassName('sidebar-toggle')[0];


toggleBtn.onclick = function() {
    theSidebar.classList.toggle('show-sidebar')
}