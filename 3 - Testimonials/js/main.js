var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var randBtn = document.getElementById('random-btn');

var theImage = document.getElementById('person-img')
var author = document.getElementById('author')
var job = document.getElementById('job')
var info = document.getElementById('info')

let current = 1;

var numOfAuthor = 0
authorArray = ['Sara Jones', 'Anna Johnson', 'Peter Jones', 'John Doe']
var numOfJob = 0
jobArray = ['WEB DEVELOPER', 'WEB DESIGNER', 'INTERN', 'THE BOSS']
var numOfInfo = 0
infoArray = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. I Want to go to see To See alot of animals and alot of animal ? what you can do else other Good?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. I Want to go to see To See alot of animals and alot of animal ? what you can do else other Good?"
]

nextBtn.onclick = function() {
    if (current === 4) {
        return
    }
    theImage.setAttribute('src', `images/person_${current += 1}.jpg`)
    author.innerHTML = authorArray[numOfAuthor += 1]
    job.innerHTML = jobArray[numOfJob += 1]
    info.innerHTML = infoArray[numOfInfo += 1]
    console.log('Prev')
}

prevBtn.onclick = function() {
    if (current === 1) {
        return
    }
    theImage.setAttribute('src', `images/person_${current -= 1}.jpg`)
    author.innerHTML = authorArray[numOfAuthor -= 1]
    job.innerHTML = jobArray[numOfJob -= 1]
    info.innerHTML = infoArray[numOfInfo -= 1]
    console.log('next')
}

randBtn.onclick = function() {
    let random = Math.floor(Math.random() * 4) + 1;
    console.log(random)
    theImage.setAttribute('src', `images/person_${random}.jpg`)
    author.innerHTML = authorArray[random - 1]
    job.innerHTML = jobArray[random - 1]
    info.innerHTML = infoArray[random - 1]
    console.log('random')
}