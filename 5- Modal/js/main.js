var theModal = document.getElementById('modal')
var closeBtn = document.getElementById('close-btn')
var openBtn = document.getElementById('open-btn')


openBtn.addEventListener('click', function() {
    theModal.classList.add('open-modal')
})

closeBtn.addEventListener('click', function() {
    theModal.classList.remove('open-modal')
})