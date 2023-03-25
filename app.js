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