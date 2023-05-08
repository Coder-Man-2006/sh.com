const leftArrow = document.querySelector('.left-arrow-div');
const rightArrow = document.querySelector('.right-arrow-div');

leftArrow.addEventListener('click', moveLeft); 
rightArrow.addEventListener('click', moveRight);

function moveLeft() {
    const pics = document.querySelector('.pic');
    pics.style.transform = 'translateX(0%)';
  }
  
  function moveRight() {
    const pics = document.querySelector('.pic');
    pics.style.transform = 'translateX(-100.5%)';
  }

const counter = 0
const more = document.querySelector('.read-more')
const about2 = document.querySelector('.about-body-2')
const aboutdiv = document.querySelector('.about')


function readCount () {
  about2.style.display = 'block';
  aboutdiv.style.height = '900px';
  aboutdiv.style.transition = '9s ease-in-out'
}  

function readLess () {
  about2.style.display = 'none';
  aboutdiv.style.height = '625px';
  aboutdiv.style.transition = '9s ease-in-out'
}

function showMore() {
  var more = document.getElementsByClassName('read-more')[0];
  var about2 = document.getElementsByClassName('about-body-2')[0];
  var aboutdiv = document.getElementsByClassName('about')[0];
  if (about2.style.display === "none") {
    about2.style.display = 'block';
    aboutdiv.style.height = '900px';
    aboutdiv.style.transition = '0.5s ease-in-out'
  } else {
    about2.style.display = 'none';
    aboutdiv.style.height = '625px';
    aboutdiv.style.transition = '0.5s ease-in-out'
  }
}


