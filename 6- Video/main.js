var preLoader = document.getElementById('preloader');
var switchBtn = document.getElementById('switch-btn');
var myVideo = document.getElementById('my-video')


window.onload = function() {
    preLoader.style.display = "none";
}

switchBtn.onclick = function() {
    if (this.classList.contains('slide')) {
        this.classList.remove('slide');
        myVideo.play()
    } else {
        this.classList.add('slide');
        myVideo.pause()
    }
}